/**
 * Build: kopieert site/ naar dist/, vult de geheimen-placeholders in
 * assets/js/site.js in vanuit de environment variables en genereert
 * sitemap.xml met een verse lastmod.
 *
 * Environment variables (lokaal via .env, op Netlify via de site settings;
 * de oude VITE_-namen blijven werken zodat de bestaande Netlify-config
 * niets hoeft te wijzigen):
 *   WEB3FORMS_KEY  (of VITE_WEB3FORMS_KEY)  formulierafhandeling
 *   GA4_ID         (of VITE_GA4_ID)         Google Analytics 4, optioneel
 */

import { cp, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const site = path.join(root, "site");
const dist = path.join(root, "dist");

// .env lokaal inlezen (Netlify zet de variabelen zelf in het proces).
try {
  const env = await readFile(path.join(root, ".env"), "utf8");
  for (const line of env.split("\n")) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].trim();
  }
} catch {
  /* geen .env: prima, dan alleen echte environment variables */
}

const WEB3FORMS_KEY = process.env.WEB3FORMS_KEY ?? process.env.VITE_WEB3FORMS_KEY ?? "";
const GA4_ID = process.env.GA4_ID ?? process.env.VITE_GA4_ID ?? "";

await rm(dist, { recursive: true, force: true });
await cp(site, dist, { recursive: true });

// Placeholders invullen
const jsPath = path.join(dist, "assets", "js", "site.js");
let js = await readFile(jsPath, "utf8");
js = js.replace("%WEB3FORMS_KEY%", WEB3FORMS_KEY).replace("%GA4_ID%", GA4_ID);
await writeFile(jsPath, js);

// Sitemap: indexeerbare pagina's (bedankt en 404 niet), verse lastmod.
const DOMAIN = "https://brandandboost.nl";
const paden = [
  "/", "/social-media", "/websites", "/coaching", "/ook-mogelijk",
  "/gratis-audit", "/over-ons", "/cases", "/faq", "/contact",
  "/algemene-voorwaarden", "/privacyverklaring", "/cookiebeleid",
];
const vandaag = new Date().toISOString().slice(0, 10);
const urls = paden
  .map((p) => `  <url><loc>${DOMAIN}${p}</loc><lastmod>${vandaag}</lastmod></url>`)
  .join("\n");
await writeFile(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

console.log(
  `Build klaar: dist/ (${paden.length} pagina's in de sitemap; ` +
  `Web3Forms-key ${WEB3FORMS_KEY ? "ingevuld" : "ONTBREEKT"}; GA4 ${GA4_ID ? "aan" : "uit"}).`,
);
