import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const resolve = createRequire(import.meta.url).resolve;
const { default: sharp } = await import(pathToFileURL(resolve("sharp", { paths: [resolve("next/package.json")] })).href);

async function main() {
  const root = path.resolve(import.meta.dirname, "..");
  const source = path.join(root, "public/brand/mandarin-mark.png");
  const icons = path.join(root, "public/icons");
  await fs.mkdir(icons, { recursive: true });

  const render = (size) => sharp(source).resize(size, size, { fit: "contain" }).png().toBuffer();
  await fs.writeFile(path.join(root, "app/icon.png"), await render(192));
  await fs.writeFile(path.join(icons, "icon-192.png"), await render(192));
  await fs.writeFile(path.join(icons, "icon-512.png"), await render(512));
  await sharp(source).resize(180, 180, { fit: "contain" }).flatten({ background: "#fffaf6" }).png().toFile(path.join(root, "app/apple-icon.png"));

  // ICO directory followed by PNG frames for standard browser favicon sizes.
  const sizes = [16, 32, 48];
  const frames = await Promise.all(sizes.map(render));
  const header = Buffer.alloc(6 + sizes.length * 16);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(sizes.length, 4);
  let offset = header.length;
  frames.forEach((frame, index) => {
    const entry = 6 + index * 16;
    header[entry] = sizes[index];
    header[entry + 1] = sizes[index];
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(frame.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += frame.length;
  });
  await fs.writeFile(path.join(root, "app/favicon.ico"), Buffer.concat([header, ...frames]));
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
