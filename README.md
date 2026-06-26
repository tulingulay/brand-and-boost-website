# Brand & Boost — website

Meertalige-vrije (alleen Nederlands), productieklare marketingwebsite voor
**Brand & Boost**, een marketingbureau voor ambitieuze MKB-ondernemers.

Gebouwd op de Lovable-stack, zodat het schoon importeert in [Lovable](https://lovable.dev)
en daar visueel bewerkbaar blijft:

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** + **shadcn/ui**
- **React Router** (meerdere pagina's)
- **react-helmet-async** (SEO per pagina)

---

## Lokaal draaien

> Vereist **Node.js 18+** (ontwikkeld en getest met Node 24 LTS) en npm.

```bash
# 1. Dependencies installeren
npm install

# 2. Omgevingsvariabelen instellen (voor het contactformulier)
cp .env.example .env
#    -> open .env en vul VITE_WEB3FORMS_KEY in (zie TODO-checklist)

# 3. Ontwikkelserver starten
npm run dev
#    -> http://localhost:8080

# Productie-build maken en lokaal bekijken
npm run build
npm run preview

# Types controleren
npm run typecheck
```

---

## Projectstructuur

```
.
├── index.html                # Basis-HTML, fonts, standaard meta
├── public/                   # Statische bestanden
│   ├── logo.svg              # TODO: placeholder-logo
│   ├── favicon.svg
│   ├── hero-illustration.svg # TODO: placeholder hero-beeld
│   ├── og-image.png          # TODO: placeholder social-share-afbeelding
│   ├── robots.txt
│   ├── sitemap.xml
│   └── cases/                # TODO: placeholder casebeelden
├── scripts/
│   └── generate-og-image.mjs # Hergenereert de placeholder og-image
└── src/
    ├── main.tsx              # App-entry (Router + Helmet)
    ├── App.tsx               # Routing
    ├── index.css             # Design-tokens (kleuren als CSS-variabelen)
    ├── components/
    │   ├── ui/               # shadcn/ui-componenten
    │   └── ...               # Header, Footer, SEO, kaarten, ContactForm, ...
    ├── data/                 # Herhalende, getypte lijsten (zie hieronder)
    └── pages/                # Eén bestand per pagina
```

### Teksten aanpassen

- **Losse zichtbare teksten** (koppen, alinea's, knoplabels) staan als gewone
  tekst in de JSX van de pagina's en componenten — zo zijn ze direct in de
  visuele editor van Lovable aan te passen.
- **Herhalende, gestructureerde lijsten** staan als getypte arrays in `src/data/`:
  - `services.ts` — de 7 diensten
  - `process.ts` — de 4 processtappen
  - `values.ts` — de kernwaarden
  - `faq.ts` — veelgestelde vragen (voedt ook de FAQ-structured-data)
  - `cases.ts` — portfolio-cases
  - `reviews.ts` — klantreviews
  - `site.ts` — contactgegevens, navigatie en social links

---


## Beeld & assets

- Bewaar afbeeldingen lokaal in `public/` (geen externe afbeeldingen hotlinken).
- Voor illustraties: [undraw.co](https://undraw.co) (in te kleuren in de
  merkkleuren) of vrije stockfoto's. Geen teamfoto's nodig.
- Afbeeldingen worden lazy geladen en hebben beschrijvende alt-teksten.

### Cookiebanner

Er staat **geen** tracking of analytics op de site, dus een cookiebanner is niet
nodig. Zodra je analytics, marketing-pixels of andere tracking toevoegt, is een
cookiebanner (en een bijgewerkte privacyverklaring) wél verplicht.

---

## SEO & AI-vindbaarheid

Al ingebouwd:

- Unieke `<title>` en `<meta name="description">` per pagina (`src/components/SEO.tsx`).
- `<html lang="nl">`, semantische structuur (één `<h1>` per pagina), Open Graph & Twitter Cards.
- Canonical-tags op het domein `https://brandandboost.nl`.
- `public/robots.txt` (verwijst naar de sitemap) en `public/sitemap.xml`.
- JSON-LD structured data: **Organization + LocalBusiness** (op elke pagina) en
  **FAQPage** (op de FAQ-pagina, gevoed vanuit `src/data/faq.ts`).

> Controleer na livegang het domein in de SEO-config (`src/data/site.ts` →
> `domain`) en in `index.html` / `sitemap.xml` / `robots.txt`.

### Merkkleuren

| Naam | Hex | Tailwind-klasse |
|---|---|---|
| Kobaltblauw | `#187DC1` | `kobalt` / `primary` |
| Zonnegeel | `#D4A017` | `zonnegeel` |
| Kastanjebruin | `#6E3F27` | `kastanje` |
| Creme | `#F6F1EB` | `creme` / `background` |
| Antraciet | `#2D2D2D` | `antraciet` / `foreground` |

> `primary` is een fractie donkerder dan de heldere merk-kobalt, zodat witte
> tekst op knoppen en links overal WCAG AA-contrast (4.5:1) halen.

---

## Naar GitHub pushen

```bash
git init
git add .
git commit -m "Brand & Boost website"
git branch -M main
git remote add origin https://github.com/<jouw-account>/<jouw-repo>.git
git push -u origin main
```

> `.env`, `node_modules` en `dist` staan in `.gitignore` en worden niet meegepusht.

## Importeren in Lovable

1. Log in op [lovable.dev](https://lovable.dev).
2. Koppel je GitHub-account en kies "een bestaande GitHub-repo importeren"
   (of, in een nieuw/bestaand Lovable-project: **Settings → GitHub** → repo koppelen).
3. Selecteer de zojuist gepushte repo. Lovable herkent de Vite + React +
   Tailwind + shadcn/ui-stack automatisch.
4. Bewerk teksten in de visuele editor; herhalende lijsten pas je aan in
   `src/data/`. Wijzigingen synchroniseren met GitHub.
5. Publiceer/host via Lovable.
