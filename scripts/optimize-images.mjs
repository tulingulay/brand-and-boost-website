/**
 * Eenmalige beeldoptimalisatie: zet de JPG/PNG-content-afbeeldingen om naar
 * passend geschaalde WebP's. Lokaal draaien en de output committen; de
 * Netlify-build blijft er buiten (geen sharp nodig op de build-agent).
 *
 *   node scripts/optimize-images.mjs
 *
 * Maten zijn afgestemd op het grootste weergaveformaat in de UI (x2 voor
 * retina): dienstfoto's tonen op ~520 px breed, casefoto's op ~600 px,
 * caselogo's op maximaal 160 px hoogte.
 */

import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = (...parts) => path.join(root, "public", ...parts);

/** [map, maximale breedte, kwaliteit] per beeldklasse. */
const jobs = [
  { dir: pub("diensten"), maxWidth: 1040, quality: 78 },
  { dir: pub("cases"), maxWidth: 1200, quality: 78 },
  { dir: pub("cases", "logos"), maxWidth: 640, quality: 88 },
];

let before = 0;
let after = 0;

for (const job of jobs) {
  const files = (await readdir(job.dir)).filter((f) => /\.(jpe?g|png)$/i.test(f));
  for (const file of files) {
    const input = path.join(job.dir, file);
    const output = input.replace(/\.(jpe?g|png)$/i, ".webp");
    const image = sharp(input);
    const meta = await image.metadata();
    await image
      .resize({ width: Math.min(job.maxWidth, meta.width ?? job.maxWidth), withoutEnlargement: true })
      .webp({ quality: job.quality })
      .toFile(output);
    const inSize = (await stat(input)).size;
    const outSize = (await stat(output)).size;
    before += inSize;
    after += outSize;
    console.log(
      `${path.relative(root, input)} ${Math.round(inSize / 1024)} kB -> ${path.relative(root, output)} ${Math.round(outSize / 1024)} kB`,
    );
  }
}

console.log(`Totaal: ${Math.round(before / 1024)} kB -> ${Math.round(after / 1024)} kB`);
