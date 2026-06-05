import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const outputDirectory = fileURLToPath(new URL("../src/assets/", import.meta.url));
const textureWidth = 2048;
const textureHeight = 1024;
const sources = {
  earthNight:
    "https://assets.science.nasa.gov/content/dam/science/esd/eo/images/imagerecords/144000/144898/BlackMarble_2016_01deg.jpg",
};

function seededRandom(seed) {
  let value = seed >>> 0;

  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function createStarfieldSvg() {
  const random = seededRandom(20260605);
  const stars = Array.from({ length: 950 }, (_, index) => {
    const x = Math.round(random() * textureWidth);
    const y = Math.round(random() * textureHeight);
    const radius = index % 37 === 0 ? 1.8 : index % 11 === 0 ? 1.1 : 0.55;
    const opacity = (0.25 + random() * 0.7).toFixed(2);
    const color = index % 13 === 0 ? "#4CC9F0" : "#ffffff";

    return `<circle cx="${x}" cy="${y}" r="${radius}" fill="${color}" opacity="${opacity}" />`;
  }).join("");

  return `
    <svg width="${textureWidth}" height="${textureHeight}" viewBox="0 0 ${textureWidth} ${textureHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="blueNebula" cx="35%" cy="45%" r="55%">
          <stop offset="0%" stop-color="#003566" stop-opacity="0.36" />
          <stop offset="52%" stop-color="#001D3D" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#000814" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="purpleNebula" cx="72%" cy="42%" r="48%">
          <stop offset="0%" stop-color="#6d28d9" stop-opacity="0.24" />
          <stop offset="55%" stop-color="#312e81" stop-opacity="0.10" />
          <stop offset="100%" stop-color="#000814" stop-opacity="0" />
        </radialGradient>
        <filter id="softBlur">
          <feGaussianBlur stdDeviation="42" />
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="#000814" />
      <ellipse cx="680" cy="440" rx="720" ry="350" fill="url(#blueNebula)" filter="url(#softBlur)" />
      <ellipse cx="1480" cy="360" rx="620" ry="310" fill="url(#purpleNebula)" filter="url(#softBlur)" />
      ${stars}
    </svg>
  `;
}

function createNoise(width, height, seed) {
  const random = seededRandom(seed);
  const pixels = Buffer.alloc(width * height);

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index] = Math.round(random() * 255);
  }

  return sharp(pixels, {
    raw: {
      width,
      height,
      channels: 1,
    },
  });
}

async function download(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Unable to download ${url}: ${response.status}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

await mkdir(outputDirectory, { recursive: true });

const earthNightSource = await download(sources.earthNight);

const earthNight = await sharp(earthNightSource)
  .resize(textureWidth, textureHeight, { fit: "fill" })
  .modulate({ brightness: 0.82, saturation: 1.25 })
  .webp({ effort: 6, quality: 82 })
  .toBuffer();

const [largeClouds, smallClouds] = await Promise.all([
  createNoise(256, 128, 32026)
    .blur(6)
    .resize(textureWidth, textureHeight, { kernel: "cubic" })
    .normalize()
    .linear(2.2, -245)
    .png()
    .toBuffer(),
  createNoise(512, 256, 52026)
    .blur(3)
    .resize(textureWidth, textureHeight, { kernel: "cubic" })
    .normalize()
    .linear(2, -235)
    .png()
    .toBuffer(),
]);

const cloudMask = await sharp(largeClouds)
  .composite([{ input: smallClouds, blend: "screen" }])
  .grayscale()
  .blur(1.4)
  .webp({ effort: 6, quality: 68 })
  .toBuffer();

const starfield = await sharp(Buffer.from(createStarfieldSvg()))
  .webp({ effort: 6, quality: 76 })
  .toBuffer();

await Promise.all([
  writeFile(`${outputDirectory}/earth-night.webp`, earthNight),
  writeFile(`${outputDirectory}/earth-clouds.webp`, cloudMask),
  writeFile(`${outputDirectory}/starfield.webp`, starfield),
]);

console.log("Generated optimized globe textures in src/assets.");
