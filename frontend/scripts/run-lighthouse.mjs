import { createServer } from "node:http";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";
import { launch } from "chrome-launcher";
import lighthouse from "lighthouse";

const distRoot = fileURLToPath(new URL("../dist/", import.meta.url));
const reportRoot = fileURLToPath(new URL("../.lighthouseci/", import.meta.url));
const port = 4173;
const runCount = 3;
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
};

function safeDistPath(pathname) {
  const relativePath =
    pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const filePath = resolve(distRoot, relativePath);
  const distPrefix = `${resolve(distRoot)}${sep}`;

  return filePath.startsWith(distPrefix) ? filePath : null;
}

async function serveFile(request, response) {
  const pathname = new URL(request.url, `http://127.0.0.1:${port}`).pathname;
  const requestedPath = safeDistPath(pathname);

  if (!requestedPath) {
    response.writeHead(403).end("Forbidden");
    return;
  }

  try {
    const body = await readFile(requestedPath);
    const contentType =
      mimeTypes[extname(requestedPath)] ?? "application/octet-stream";
    const canCompress =
      request.headers["accept-encoding"]?.includes("gzip") &&
      /^(application\/json|text\/)/.test(contentType);
    const responseBody = canCompress ? gzipSync(body) : body;
    const headers = {
      "Cache-Control": pathname.startsWith("/assets/")
        ? "public, max-age=31536000, immutable"
        : "no-cache",
      "Content-Type": mimeTypes[extname(requestedPath)] ?? "application/octet-stream",
    };

    if (canCompress) {
      headers["Content-Encoding"] = "gzip";
      headers.Vary = "Accept-Encoding";
    }

    response.writeHead(200, headers);
    response.end(responseBody);
  } catch {
    const body = await readFile(resolve(distRoot, "index.html"));
    response.writeHead(200, { "Content-Type": mimeTypes[".html"] });
    response.end(body);
  }
}

const server = createServer((request, response) => {
  serveFile(request, response).catch((error) => {
    response.writeHead(500).end(error.message);
  });
});

await new Promise((resolveServer) => server.listen(port, "127.0.0.1", resolveServer));

function extractMetrics({ audits, categories }) {
  return {
    accessibility: categories.accessibility.score,
    cls: audits["cumulative-layout-shift"].numericValue,
    lcp: audits["largest-contentful-paint"].numericValue,
    performance: categories.performance.score,
    seo: categories.seo.score,
    tbt: audits["total-blocking-time"].numericValue,
  };
}

function median(values) {
  const sortedValues = [...values].sort((first, second) => first - second);
  return sortedValues[Math.floor(sortedValues.length / 2)];
}

let chrome;

try {
  chrome = await launch({
    chromeFlags: [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
    ],
  });

  await mkdir(reportRoot, { recursive: true });
  const runs = [];

  for (let run = 1; run <= runCount; run += 1) {
    const result = await lighthouse(`http://127.0.0.1:${port}/`, {
      logLevel: "error",
      onlyCategories: ["performance", "accessibility", "seo"],
      output: "json",
      port: chrome.port,
    });

    const metrics = extractMetrics(result.lhr);
    runs.push(metrics);
    await writeFile(
      resolve(reportRoot, `lighthouse-report-${run}.json`),
      result.report,
      "utf8",
    );

    console.log(
      `Lighthouse run ${run}/${runCount}: performance ${Math.round(metrics.performance * 100)}, LCP ${Math.round(metrics.lcp)} ms, CLS ${metrics.cls.toFixed(4)}.`,
    );
  }

  const metrics = Object.fromEntries(
    Object.keys(runs[0]).map((key) => [
      key,
      median(runs.map((run) => run[key])),
    ]),
  );

  await writeFile(
    resolve(reportRoot, "lighthouse-summary.json"),
    JSON.stringify({ median: metrics, runs }, null, 2),
    "utf8",
  );

  console.log("Median Lighthouse result:");
  console.table({
    Performance: Math.round(metrics.performance * 100),
    Accessibility: Math.round(metrics.accessibility * 100),
    SEO: Math.round(metrics.seo * 100),
    "LCP (ms)": Math.round(metrics.lcp),
    CLS: Number(metrics.cls.toFixed(4)),
    "TBT (ms)": Math.round(metrics.tbt),
  });

  const failures = [
    metrics.performance < 0.9 && "Performance score is below 90.",
    metrics.accessibility < 0.9 && "Accessibility score is below 90.",
    metrics.seo < 0.9 && "SEO score is below 90.",
    metrics.lcp > 2500 && "LCP is above 2500 ms.",
    metrics.cls > 0.1 && "CLS is above 0.1.",
    metrics.tbt > 200 && "TBT is above 200 ms.",
  ].filter(Boolean);

  if (failures.length > 0) {
    throw new Error(failures.join(" "));
  }
} finally {
  await chrome?.kill();
  await new Promise((resolveServer) => server.close(resolveServer));
}
