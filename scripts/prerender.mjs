/**
 * Prerender-stap: draait ná `vite build` (client) en `vite build --ssr`
 * (server-bundle) en schrijft voor elke route uit src/routes.ts een
 * statische HTML in dist/, plus dist/404.html en dist/sitemap.xml.
 *
 * Waarom: de site was 100% client-side gerenderd, waardoor crawlers,
 * social-media-previews en AI-crawlers overal een lege pagina met de
 * homepage-meta zagen. Na deze stap bevat elke URL zijn eigen inhoud,
 * titel, canonical en JSON-LD, en hydrateert React eroverheen
 * (zie src/main.tsx).
 *
 * Aanroep: node scripts/prerender.mjs   (zie "build" in package.json)
 */

import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const serverDir = path.join(dist, "server");

const { render, prerenderRoutes } = await import(
  new URL(path.join(serverDir, "entry-server.js"), "file://").href
);

const template = await readFile(path.join(dist, "index.html"), "utf8");

const META_BLOCK = /<!--ssr-meta-start-->[\s\S]*?<!--ssr-meta-end-->/;
if (!META_BLOCK.test(template) || !template.includes("<!--app-html-->")) {
  throw new Error("index.html mist de ssr-meta-markers of de app-html-placeholder.");
}

/** Bouw het head-blok voor één pagina uit de helmet-verzameling. */
function headFor(helmet) {
  return [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join("\n    ");
}

async function writePage(routePath, outFile) {
  const { html, helmet } = await render(routePath);
  if (!html.includes("<h1")) {
    throw new Error(`Prerender van ${routePath} bevat geen <h1>; dat wijst op een kapotte render.`);
  }
  const page = template.replace(META_BLOCK, headFor(helmet)).replace("<!--app-html-->", html);
  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, page, "utf8");
}

let written = 0;
for (const route of prerenderRoutes) {
  const outFile =
    route.path === "/"
      ? path.join(dist, "index.html")
      : path.join(dist, route.path.slice(1), "index.html");
  await writePage(route.path, outFile);
  written += 1;

  // Schrijf ook de platte variant (bijv. dist/diensten.html): Netlify lost
  // /diensten zelf op naar de map-index, maar eenvoudige statische servers
  // (waaronder vite preview) doen dat alleen met deze variant erbij.
  if (route.path !== "/") {
    await cp(outFile, path.join(dist, `${route.path.slice(1)}.html`));
  }
}

// 404-pagina: een gegarandeerd onbekende URL rendert de NotFound-route.
await writePage("/deze-pagina-bestaat-niet", path.join(dist, "404.html"));
written += 1;

// ===== sitemap.xml uit dezelfde routelijst =====
const DOMAIN = "https://brandandboost.nl";
const today = new Date().toISOString().slice(0, 10);
const urls = prerenderRoutes
  .filter((route) => !route.noindex)
  .map(
    (route) => `  <url>
    <loc>${DOMAIN}${route.path === "/" ? "/" : route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join("\n");

await writeFile(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  "utf8",
);

// Server-bundle is niet nodig op de host.
await rm(serverDir, { recursive: true, force: true });

console.log(`Prerender klaar: ${written} HTML-bestanden + sitemap.xml (${prerenderRoutes.length} routes).`);
