# Brand & Boost · website

Productieklare marketingwebsite (alleen Nederlands) voor **Brand & Boost**,
een marketingbureau voor ambitieuze MKB-ondernemers.

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** + **shadcn/ui**
- **React Router** (meerdere pagina's)
- **Prerendering**: elke route wordt bij de build als statische HTML
  geschreven (`scripts/prerender.mjs`), met per pagina de juiste title,
  meta, canonical en JSON-LD. React hydrateert daaroverheen.
- Fonts self-hosted via `@fontsource` (geen Google Fonts-requests).

---

## Lokaal draaien

> Vereist **Node.js 18+** (ontwikkeld en getest met Node 24 LTS) en npm.

```bash
# 1. Dependencies installeren
npm install

# 2. Omgevingsvariabelen instellen
cp .env.example .env
#    -> open .env en vul VITE_WEB3FORMS_KEY in (contactformulier)
#    -> optioneel VITE_GA4_ID (Google Analytics 4, zie hieronder)

# 3. Ontwikkelserver starten
npm run dev
#    -> http://localhost:8080

# Productie-build (client + SSR + prerender + sitemap) en lokaal bekijken
npm run build
npm run preview

# Types controleren
npm run typecheck
```

> Let op: `VITE_WEB3FORMS_KEY` en `VITE_GA4_ID` zijn **build-time**
> variabelen. Ze moeten ook in de Netlify UI staan (Site settings →
> Environment variables), anders werkt het formulier of de meting niet op
> productie.

---

## Projectstructuur

```
.
├── index.html                # Template; prerender vervangt het meta-blok per pagina
├── netlify.toml              # Build, echte 404, caching- en security-headers
├── public/                   # Statische bestanden (logo's, WebP-beelden, robots.txt)
├── scripts/
│   ├── prerender.mjs         # Schrijft dist/<route>/index.html + dist/sitemap.xml
│   ├── optimize-images.mjs   # JPG/PNG -> geschaalde WebP (lokaal draaien, output committen)
│   └── generate-og-image.mjs # Hergenereert public/og-image.png in huisstijl
└── src/
    ├── main.tsx              # Client-entry (hydrate + fonts + analytics-init)
    ├── entry-server.tsx      # SSR-entry voor de prerender
    ├── routes.ts             # Eén bron voor prerender + sitemap
    ├── App.tsx               # Routing (juridische pagina's + /bedankt zijn lazy)
    ├── index.css             # Design-tokens (kleuren als CSS-variabelen)
    ├── lib/analytics.ts      # GA4 + Consent Mode v2 (no-op zonder VITE_GA4_ID)
    ├── components/           # Header, Footer, SEO, CaseStory, ContactForm, ...
    ├── data/                 # Herhalende, getypte lijsten (zie hieronder)
    └── pages/                # Eén bestand per pagina
```

### Teksten aanpassen

- **Losse zichtbare teksten** (koppen, alinea's, knoplabels) staan als gewone
  tekst in de JSX van de pagina's en componenten.
- **Herhalende, gestructureerde lijsten** staan als getypte arrays in `src/data/`:
  - `services.ts` — de 8 diensten
  - `process.ts` — de 4 processtappen
  - `values.ts` — de kernwaarden
  - `faq.ts` — veelgestelde vragen (voedt ook de FAQ-structured-data en de
    kruislinks dienst ↔ FAQ-categorie)
  - `cases.ts` — portfolio-cases, met optionele velden `serviceIds`
    (kruislinks), `metrics` (echte cijfers; leeg = sectie verschijnt niet),
    `reviewName` (koppelt de klantquote) en `liveUrl`
  - `reviews.ts` — klantreviews (optioneel `role`/`source`)
  - `site.ts` — contactgegevens, navigatie, socials en `schedulingUrl`
    (Calendly/Cal.com; zodra gevuld wijzen de primaire CTA's daarheen)

### Nieuwe pagina toevoegen

Route registreren in `src/App.tsx` **én** in `src/routes.ts` (prerender +
sitemap volgen dan vanzelf bij de eerstvolgende build).

---

## ✅ Aan te leveren / checklist

| Onderdeel | Waar |
|---|---|
| **Web3Forms access key** | `.env` én Netlify env vars → `VITE_WEB3FORMS_KEY` |
| **GA4 meet-ID** | `.env` én Netlify env vars → `VITE_GA4_ID` (formaat `G-XXXX…`) |
| **Case-cijfers** | `src/data/cases.ts` → `metrics` (echte resultaten van de klant) |
| **Live-URL You and Me** | `src/data/cases.ts` → `liveUrl` (huidige domein onbekend) |
| **Social links** | `src/data/site.ts` (`socials`) — verschijnen dan vanzelf in footer, contact en JSON-LD |
| **Agenda-link** (optioneel) | `src/data/site.ts` → `schedulingUrl` |
| **Regio-bevestiging FAQ** | `src/data/faq.ts` — klopt "Rotterdam, heel Nederland"? |

> Het contactformulier stuurt inzendingen naar **info@brandandboost.nl** via
> Web3Forms en leidt na succes door naar **/bedankt** (daar wordt de
> conversie gemeten). Zonder key toont het formulier een nette melding met
> mailto-fallback.

---

## Analytics & cookies

- `src/lib/analytics.ts` initialiseert **GA4 met Consent Mode v2**: alles
  start op "denied"; pas na "Akkoord" in de cookiemelding gaat
  `analytics_storage` naar "granted". Advertentie-consent blijft altijd uit.
- Zonder `VITE_GA4_ID` wordt er **niets** geladen en is `track()` een no-op.
- De cookiemelding (`CookieConsent.tsx`) en het cookiebeleid beschrijven
  precies deze situatie. Voeg je ooit marketing-pixels toe, werk dan beleid
  én melding bij.
- Events: `lead_form_submitted` vuurt op /bedankt (met sessionStorage-vlag
  tegen dubbeltelling). Nieuwe events: `track("naam", {props})`.

---

## SEO & AI-vindbaarheid

Al ingebouwd:

- Prerendering van alle 19 routes: crawlers, link-previews en AI-crawlers
  zien volledige HTML met unieke title/description/canonical per pagina.
- Echte **404-status** voor onbekende URL's (netlify.toml → `/404.html`).
- `dist/sitemap.xml` wordt bij elke build gegenereerd uit `src/routes.ts`
  (noindex-routes zoals /bedankt blijven eruit).
- JSON-LD: **Organization** (elke pagina), **FAQPage** (/faq),
  **BreadcrumbList + Service** (dienstpagina's).
- Caching- en security-headers in `netlify.toml` (immutable assets, nosniff,
  frame-deny, referrer- en permissions-policy).

### Merkkleuren

| Naam | Hex | Tailwind-klasse |
|---|---|---|
| Kobaltblauw | `#187DC1` | `kobalt` / `primary` |
| Zonnegeel | `#D4A017` | `zonnegeel` |
| Kastanjebruin | `#6E3F27` | `kastanje` |
| Creme | `#F6F1EB` | `creme` / `background` |
| Antraciet | `#2D2D2D` | `antraciet` / `foreground` |

> `primary` is een fractie donkerder dan de heldere merk-kobalt, zodat witte
> tekst op knoppen en links overal WCAG AA-contrast (4.5:1) haalt. Gedempte
> tekstlabels gebruiken minimaal `text-antraciet/70` (contrast-conventie).

### Beelden

Content-afbeeldingen zijn WebP, geschaald op weergaveformaat. Nieuwe beelden:
zet de JPG/PNG in de juiste map onder `public/`, draai lokaal
`node scripts/optimize-images.mjs` en commit de `.webp`-output (de build op
Netlify raakt beelden niet aan).
