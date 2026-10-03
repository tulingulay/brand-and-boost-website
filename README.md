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

Teksten aanpassen doe je direct in de HTML-bestanden in `site/`. Let op:
header en footer staan op elke pagina; een menu-wijziging dus overal
doorvoeren (of even zoeken-en-vervangen over `site/*.html`).

## Formulieren

Drie formulieren (`gratis-audit`, `kennismaking-coaching`, `contact`)
versturen via **Web3Forms** naar info@brandandboost.nl, met honeypot
(`bot-veld`) en doorverwijzing naar `/bedankt` (daar vuurt het
conversie-event). De key komt uit de environment variable
`WEB3FORMS_KEY` (of het oude `VITE_WEB3FORMS_KEY`) en wordt bij de build
ingevuld; zonder key tonen de formulieren een nette mail-fallback.

## Cookies en meting

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
