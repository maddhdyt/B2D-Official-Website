import { readFile, writeFile } from "node:fs/promises";

const distIndexUrl = new URL("../dist/index.html", import.meta.url);
const serverEntryUrl = new URL("../dist-ssr/entry-server.js", import.meta.url);
const template = await readFile(distIndexUrl, "utf8");
const { render } = await import(serverEntryUrl);
const appHtml = render();
const output = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`,
);

if (output === template) {
  throw new Error("Unable to find the root element while pre-rendering.");
}

await writeFile(distIndexUrl, output, "utf8");
console.log("Pre-rendered homepage into dist/index.html.");
