/**
 * Genereert een placeholder og-image.png (1200x630) in de merkkleuren,
 * zonder externe libraries. Puur als tijdelijke social-share-afbeelding.
 *
 * TODO: vervang public/og-image.png door een definitieve afbeelding met logo
 * en tekst (1200x630). Regenereren kan met:  node scripts/generate-og-image.mjs
 */
import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const W = 1200;
const H = 630;

// RGB-buffer (color type 2)
const channels = 3;
const stride = W * channels;
const raw = Buffer.alloc(H * (1 + stride));

function setPixel(x, y, r, g, b) {
  if (x < 0 || x >= W || y < 0 || y >= H) return;
  const rowStart = y * (1 + stride) + 1;
  const i = rowStart + x * channels;
  raw[i] = r;
  raw[i + 1] = g;
  raw[i + 2] = b;
}

function lerp(a, b, t) {
  return Math.round(a + (b - a) * t);
}

// Achtergrond: verticaal kobalt-verloop
const top = [27, 131, 201]; // #1B83C9
const bottom = [17, 99, 158]; // #11639E
for (let y = 0; y < H; y++) {
  const t = y / (H - 1);
  const r = lerp(top[0], bottom[0], t);
  const g = lerp(top[1], bottom[1], t);
  const b = lerp(top[2], bottom[2], t);
  for (let x = 0; x < W; x++) setPixel(x, y, r, g, b);
}

function fillRect(x0, y0, w, h, [r, g, b]) {
  for (let y = y0; y < y0 + h; y++) for (let x = x0; x < x0 + w; x++) setPixel(x, y, r, g, b);
}

function fillCircle(cx, cy, radius, [r, g, b], alpha = 1) {
  for (let y = cy - radius; y <= cy + radius; y++) {
    for (let x = cx - radius; x <= cx + radius; x++) {
      const dx = x - cx;
      const dy = y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        if (alpha >= 1) setPixel(x, y, r, g, b);
        else {
          const row = y * (1 + stride) + 1 + x * channels;
          if (x < 0 || x >= W || y < 0 || y >= H) continue;
          raw[row] = lerp(raw[row], r, alpha);
          raw[row + 1] = lerp(raw[row + 1], g, alpha);
          raw[row + 2] = lerp(raw[row + 2], b, alpha);
        }
      }
    }
  }
}

const white = [255, 255, 255];
const zonnegeel = [212, 160, 23];

// Decoratieve cirkels
fillCircle(1050, 130, 150, white, 0.1);
fillCircle(150, 540, 120, zonnegeel, 0.16);

// Oplopende staven (groei) linksonder
const baseline = 470;
const bars = [
  { h: 90, c: [255, 255, 255], a: 0.55 },
  { h: 150, c: [255, 255, 255], a: 0.8 },
  { h: 210, c: zonnegeel, a: 1 },
  { h: 280, c: white, a: 1 },
];
let bx = 120;
for (const bar of bars) {
  if (bar.a >= 1) fillRect(bx, baseline - bar.h, 90, bar.h, bar.c);
  else for (let y = baseline - bar.h; y < baseline; y++) for (let x = bx; x < bx + 90; x++) {
    const row = y * (1 + stride) + 1 + x * channels;
    raw[row] = lerp(raw[row], bar.c[0], bar.a);
    raw[row + 1] = lerp(raw[row + 1], bar.c[1], bar.a);
    raw[row + 2] = lerp(raw[row + 2], bar.c[2], bar.a);
  }
  bx += 120;
}

// Zonnegeel accentstreep
fillRect(120, baseline + 24, 450, 8, zonnegeel);

// PNG-encoder
function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, "ascii");
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0);
ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8; // bit depth
ihdr[9] = 2; // color type RGB
const idat = deflateSync(raw, { level: 9 });
const png = Buffer.concat([sig, chunk("IHDR", ihdr), chunk("IDAT", idat), chunk("IEND", Buffer.alloc(0))]);

const out = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "og-image.png");
writeFileSync(out, png);
console.log(`og-image.png geschreven (${png.length} bytes) -> ${out}`);
