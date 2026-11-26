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

import { cp, readFile, rm, writeFile, readdir } from "node:fs/promises";
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

// De Web3Forms-sleutel is geen geheim: hij staat altijd leesbaar in de pagina
// en kan alleen mail naar info@brandandboost.nl sturen. Daarom mag hij hier als
// standaard staan; een waarde in Netlify gaat voor.
const WEB3FORMS_STANDAARD = "30b3308c-087c-4fce-8dbe-d5f576af2224";
const WEB3FORMS_KEY = process.env.WEB3FORMS_KEY || process.env.VITE_WEB3FORMS_KEY || WEB3FORMS_STANDAARD;
const GA4_ID = process.env.GA4_ID ?? process.env.VITE_GA4_ID ?? "";

await rm(dist, { recursive: true, force: true });
await cp(site, dist, { recursive: true });

// Placeholders invullen
const jsPath = path.join(dist, "assets", "js", "site.js");
let js = await readFile(jsPath, "utf8");
js = js.replace("%WEB3FORMS_KEY%", WEB3FORMS_KEY).replace("%GA4_ID%", GA4_ID);
await writeFile(jsPath, js);

// FAQPage-schema: gegenereerd uit de vragen die echt op een pagina staan.
const platteTekst = (html) =>
  html.replace(/<span class="merk"[\s\S]*?<\/svg><\/span>/g, "").replace(/<\/p>\s*<p>/g, " ").replace(/<[^>]+>/g, "")
    .replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&quot;", '"').replace(/\s+/g, " ").trim();
let vragenOpFaq = 0, paginasMetVragen = 0;
for (const bestand of (await readdir(dist)).filter((f) => f.endsWith(".html"))) {
  const pad = path.join(dist, bestand);
  let html = await readFile(pad, "utf8");
  // Een vraag is een <details> met direct na de <summary> een kale <div>. De openklapregels
  // op home (met een div met klasse) vallen daar bewust buiten.
  const vragen = [...html.matchAll(/<details[^>]*>\s*<summary>([\s\S]*?)<\/summary>\s*<div>([\s\S]*?)<\/div>\s*<\/details>/g)]
    .map((m) => ({ "@type": "Question", name: platteTekst(m[1]), acceptedAnswer: { "@type": "Answer", text: platteTekst(m[2]) } }));
  if (bestand === "faq.html") vragenOpFaq = vragen.length;
  if (vragen.length === 0) continue;
  paginasMetVragen++;
  const faqSchema = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: vragen }).replaceAll("<", "\\u003c");
  html = html.replace("</head>", `<script type="application/ld+json">${faqSchema}</script></head>`);
  await writeFile(pad, html);
}
if (vragenOpFaq === 0) throw new Error("Geen vragen gevonden in faq.html: FAQPage-schema niet gemaakt.");
const vragen = { length: vragenOpFaq };

// Sitemap: indexeerbare pagina's (bedankt en 404 niet), verse lastmod.
const DOMAIN = "https://brandandboost.nl";
// Losse casepagina's komen vanzelf in de sitemap. Bestanden die met een streepje
// beginnen (het sjabloon) zijn werkbestanden en gaan niet mee naar de live site.
const casesMap = path.join(dist, "cases");
const casePaden = [];
for (const f of (await readdir(casesMap)).filter((n) => n.endsWith(".html")).sort()) {
  if (f.startsWith("_")) { await rm(path.join(casesMap, f)); continue; }
  casePaden.push("/cases/" + f.replace(/\.html$/, ""));
}
const paden = [
  "/", "/social-media", "/websites", "/coaching", "/prijzen", "/ook-mogelijk",
  "/gratis-audit", "/voorbeeld-audit", "/over-ons", "/cases", ...casePaden, "/faq", "/contact",
  "/kennisbank", "/wat-kost-social-media-uitbesteden",
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
  `${vragen.length} vragen in het FAQ-schema; Web3Forms-key ${WEB3FORMS_KEY ? "ingevuld" : "ONTBREEKT"}; GA4 ${GA4_ID ? "aan" : "uit"}).`,
);
