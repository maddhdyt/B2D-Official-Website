import { readFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";

const distUrl = new URL("../dist/", import.meta.url);
const manifest = JSON.parse(
  await readFile(new URL(".vite/manifest.json", distUrl), "utf8"),
);
const entry = manifest["index.html"];
const dynamicEntries = [
  "src/three/GlobeCanvas.jsx",
  "src/sections/GrowthStrategySection.jsx",
  "src/sections/PortfolioShowcaseFlow.jsx",
  "src/sections/InsightsSection.jsx",
  "src/sections/WhatWeDoBestSection.jsx",
];
const initialJsBudget = 120 * 1024;
const initialCssBudget = 20 * 1024;

if (!entry?.isEntry) {
  throw new Error("Vite manifest does not contain the expected index entry.");
}

for (const dynamicEntry of dynamicEntries) {
  if (!manifest[dynamicEntry]?.isDynamicEntry) {
    throw new Error(`${dynamicEntry} is not isolated as a dynamic entry.`);
  }

  if (entry.imports?.includes(dynamicEntry)) {
    throw new Error(`${dynamicEntry} was pulled into the initial route.`);
  }
}

const entryBuffer = await readFile(new URL(entry.file, distUrl));
const entryGzipSize = gzipSync(entryBuffer).byteLength;

if (entryGzipSize > initialJsBudget) {
  throw new Error(
    `Initial JavaScript is ${entryGzipSize} bytes gzip; budget is ${initialJsBudget}.`,
  );
}

for (const cssFile of entry.css ?? []) {
  const cssBuffer = await readFile(new URL(cssFile, distUrl));
  const cssGzipSize = gzipSync(cssBuffer).byteLength;

  if (cssGzipSize > initialCssBudget) {
    throw new Error(
      `Initial CSS is ${cssGzipSize} bytes gzip; budget is ${initialCssBudget}.`,
    );
  }
}

console.log(
  `Build verified: initial JS ${(entryGzipSize / 1024).toFixed(2)} kB gzip; heavy sections remain dynamic.`,
);
