# Brand & Boost · website (nieuw ontwerp)

Statische website voor **Brand & Boost**: gewone HTML en CSS, zonder
framework. De bron van het ontwerp is het referentieontwerp van Pien
(blauw #006dbe, geel alleen voor de audit-knop, Montserrat + Figtree).

## Structuur

```
site/                      De site zelf: 15 pagina's, klaar om te bouwen
  assets/css/site.css      Alle opmaak uit het referentieontwerp (letterlijk)
  assets/css/aanvullingen.css  Self-hosted fonts, cookiemelding, casebeelden
  assets/js/site.js        Cookiemelding, GA4 Consent Mode, formulieren, menu's
  assets/fonts/            Montserrat + Figtree als woff2 (AVG: geen Google Fonts)
  assets/img/              Logo, favicon, og-beeld, foto's en casebeelden
scripts/build-site.mjs     Build: site/ -> dist/ + geheimen + sitemap
netlify.toml               Redirects (oude URL's!), headers, build
```

## Werken aan de site

```bash
# Lokaal bekijken (zonder geheimen; formulieren tonen dan een mail-fallback)
npm run dev          # -> http://localhost:3000

# Productie-build en bekijken
cp .env.example .env     # eenmalig; vul WEB3FORMS_KEY (en evt. GA4_ID) in
npm run build
npm run preview
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


`site.js` toont de cookiemelding (zelfde localStorage-sleutel als de
vorige site, dus eerdere keuzes blijven gelden) en stuurt Google
Analytics 4 aan via Consent Mode v2: zonder `GA4_ID` wordt er niets
geladen, en mét ID wordt er pas gemeten na "Akkoord". De keuze is te
herzien via "Cookievoorkeuren" onderin de footer.

## Oude URL's

Alle URL's van de vorige site (o.a. `/diensten/...`, `/portfolio`,
`/proces`, `/ons-verhaal`) hebben een 301-redirect in `netlify.toml`.
Nieuwe pagina verwijderen of hernoemen? Voeg daar dan een redirect toe.

## Nog aan te leveren (zie ook het overdrachtsverslag)

- Quotes van Tulin en Sydney voor de coachingpagina (sectie staat klaar
  met `hidden` in `site/coaching.html`).
- Screenshot van de case Keukenontwerpers Woerden + langere casetekst.
- Aangepaste quote van Petra Scheffer voor de case You and Me.
- Antwoord op "Kan ik maandelijks opzeggen?" voor de FAQ (opzegtermijn).
