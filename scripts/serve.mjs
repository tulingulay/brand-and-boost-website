/**
 * Lokale statische server met schone URL's, zoals Netlify ze serveert.
 *
 *   node scripts/serve.mjs [map] [poort]
 *
 * /social-media wordt social-media.html, / wordt index.html en onbekende
 * paden krijgen 404.html met een echte 404-status.
 */

import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const hier = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(hier, "..", process.argv[2] ?? "dist");
const POORT = Number(process.argv[3] ?? 8081);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp",
  ".svg": "image/svg+xml", ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8", ".txt": "text/plain; charset=utf-8",
  ".ico": "image/x-icon",
};

createServer(async (req, res) => {
  let pad = decodeURIComponent((req.url ?? "/").split("?")[0]);
  if (pad.endsWith("/")) pad += "index.html";
  let bestand = path.join(ROOT, pad);
  if (!path.extname(bestand)) bestand += ".html";
  try {
    if (!path.resolve(bestand).startsWith(ROOT)) throw new Error("buiten root");
    const data = await readFile(bestand);
    res.writeHead(200, { "Content-Type": TYPES[path.extname(bestand)] ?? "application/octet-stream" });
    res.end(data);
  } catch {
    try {
      const vierNulVier = await readFile(path.join(ROOT, "404.html"));
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end(vierNulVier);
    } catch {
      res.writeHead(404);
      res.end("404");
    }
  }
}).listen(POORT, () => console.log(`Serveert ${ROOT} op http://localhost:${POORT}`));
