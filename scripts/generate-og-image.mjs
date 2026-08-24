/**
 * Genereert public/og-image.png (1200x630) in de huisstijl: creme vlak,
 * het kobaltblauwe wordmerk gecentreerd, een zonnegele markeerstreep
 * eronder (zoals de hero-onderstreping op de site) en een kobalt voetbalk.
 *
 * Bewust zonder losse tekstregels: de systeemfonts van een build-agent
 * bevatten Bricolage/Montserrat niet, en een tagline in een vervangend
 * font zou de huisstijl breken. Titel en omschrijving van een gedeelde
 * link komen uit de OG-metatags per pagina.
 *
 * Lokaal draaien en het resultaat committen:
 *   node scripts/generate-og-image.mjs
 */

import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const WIDTH = 1200;
const HEIGHT = 630;

// Huisstijl (zie tailwind.config.ts)
const CREME = "#F6F1EB";
const KOBALT = "#187DC1";
const ZONNEGEEL = "#D4A017";

const LOGO_WIDTH = 760;

const background = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${CREME}" />
  <!-- Markeerstreep onder het wordmerk, zoals de hero-onderstreping -->
  <rect x="${(WIDTH - 340) / 2}" y="392" width="340" height="16" rx="8" fill="${ZONNEGEEL}" />
  <!-- Kobalt voetbalk -->
  <rect x="0" y="${HEIGHT - 22}" width="${WIDTH}" height="22" fill="${KOBALT}" />
</svg>`;

const logo = await sharp(path.join(root, "public", "logo-blue.png"))
  .resize({ width: LOGO_WIDTH })
  .toBuffer();
const logoMeta = await sharp(logo).metadata();

await sharp(Buffer.from(background))
  .composite([
    {
      input: logo,
      left: Math.round((WIDTH - LOGO_WIDTH) / 2),
      top: Math.round((HEIGHT - (logoMeta.height ?? 180)) / 2) - 40,
    },
  ])
  .png()
  .toFile(path.join(root, "public", "og-image.png"));

console.log("public/og-image.png opnieuw gegenereerd (1200x630).");
