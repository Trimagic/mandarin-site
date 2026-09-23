import fs from "node:fs/promises";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const resolve = createRequire(import.meta.url).resolve;
const { default: sharp } = await import(pathToFileURL(resolve("sharp", { paths: [resolve("next/package.json")] })).href);

for (const name of ["asus", "lenovo", "acer", "sony", "lg"]) {
  const file = new URL(`../public/brands/${name}.svg`, import.meta.url);
  const svg = await fs.readFile(file, "utf8");
  const original = svg.replace(/viewBox="[^"]+"/, 'viewBox="0 0 24 24"');
  const { data, info } = await sharp(Buffer.from(original)).resize(2400, 2400).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let left = info.width, top = info.height, right = 0, bottom = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      if (data[(y * info.width + x) * info.channels + info.channels - 1] > 0) {
        left = Math.min(left, x); top = Math.min(top, y);
        right = Math.max(right, x); bottom = Math.max(bottom, y);
      }
    }
  }
  const viewBox = [left / 100, top / 100, (right - left + 1) / 100, (bottom - top + 1) / 100].join(" ");
  await fs.writeFile(file, svg.replace(/viewBox="[^"]+"/, `viewBox="${viewBox}"`));
  console.log(`${name}: ${viewBox}`);
}
