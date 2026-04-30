import { readFileSync, writeFileSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = resolve(__dirname, "../src/assets");

const TARGETS = ["jp-portrait", "jp-writing"];
const MAX_WIDTH = 1600;
const JPG_QUALITY = 82;
const WEBP_QUALITY = 80;

function fmtKB(bytes: number) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

for (const name of TARGETS) {
  const inputPath = resolve(ASSETS_DIR, `${name}.jpg`);
  const jpgOut = resolve(ASSETS_DIR, `${name}.jpg`);
  const webpOut = resolve(ASSETS_DIR, `${name}.webp`);

  const inputBytes = readFileSync(inputPath);
  const before = statSync(inputPath).size;

  const jpgBuffer = await sharp(inputBytes)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: JPG_QUALITY, mozjpeg: true })
    .toBuffer();

  const webpBuffer = await sharp(inputBytes)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toBuffer();

  writeFileSync(jpgOut, jpgBuffer);
  writeFileSync(webpOut, webpBuffer);

  console.log(
    `${name}: ${fmtKB(before)} -> jpg ${fmtKB(jpgBuffer.length)}, webp ${fmtKB(webpBuffer.length)}`,
  );
}
