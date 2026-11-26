# Ontwerpsysteem Brand & Boost: het scrollverhaal

Lees dit bestand voordat je een pagina maakt of aanpast. Merk, kleuren, prijzen en regels staan in `CLAUDE.md`; dit bestand beschrijft alleen de vorm. Dit systeem vervangt "Het rapport" (november 2026).

## 1. Sfeer
De pagina kleurt mee met het scrollen: blauw, wit en lichtblauw lopen vloeiend in elkaar over. Rustig en overzichtelijk: grote koppen, maar niet reusachtig, en geen lege vlakken. Skelet: scrollverhaal (de audit als pagina). Hero van home: slogan links, het auditblad rechts.

## 2. Kleur
- Alleen tokens uit `site/assets/css/boost.css` (`var(--blauw)`, `var(--fg)`, `var(--merk)`), nooit een losse hexwaarde.
- Elke `<section>` in `<main>` krijgt `data-thema="blauw|wit|licht"`. Nooit twee keer hetzelfde thema na elkaar. `<body data-thema>` is het thema van de eerste sectie.
- Geel alleen als knop, markeerstift (`.stift`), stempel, vinkje of harde schaduw.

## 3. Typografie
- `.reus` alleen de slogan op home. `.groot` voor de kop van een sectie (hooguit 56px), `.kop2` voor rustige secties, `.kop3` in kaarten en lijsten.
- Eén gemarkeerd woord per kop met `.stift`. Geen cursief.

## 4. Bouwstenen
| Bouwsteen | Klasse | Gebruik |
|---|---|---|
| Kop | `.kop`, `.menu` | Zwevende blauwe capsule met gele leesbalk |
| Hero | `.held` (home), `.paginaheld` (overig) | |
| Auditblad | `.blad` | Alleen de hero van home: vier punten die worden afgevinkt |
| Stelling | `.stelling` met `data-scrol` en `data-woorden` | Woorden lichten op bij scrollen. Hooguit één per pagina, alleen voor een korte zin |
| Het hele plaatje | `.plaatje`, `.ring`, `.stap` | De ring vult zich per stap |
| Oud naast nieuw | `.vergelijk` | Schuif tussen twee beelden |
| Openklapregels | `.pijlers`, `.pijler` | De drie diensten op home |
| Prijskaarten | `.prijskaarten`, `.prijskaart`, `--aanrader` | Altijd drie naast elkaar, op thema `licht`. Zelfde stijl op social media, websites en coaching |
| Schakelaar | `.schakel` met `data-tarief`, `.jaar`, `.flex` | Jaarcontract of flexibel |
| Prijsregels | `.prijsregels`, `.prijsregel` | Naam, stippellijn, prijs |
| Werkbaan | `.werk`, `.case` | Schuift zijwaarts op desktop, veegt op mobiel. Hooguit één per pagina |
| Content van een klant | `.drieluik` | Echte posts naast elkaar, geen schermafbeelding van Instagram |
| Rustige lijsten | `.punten`, `.viertal`, `.stappen`, `.vinkjes` | |
| Vragen | `.vragen` met `<details>` | De build maakt er FAQ-schema van |
| Vel en formulier | `.vel`, `.form`, `.veld` | Telefoonnummer is altijd verplicht |
| Leestekst | `.lees`, `.tabelrol` | Juridische pagina's en artikelen |

## 5. Layout
- Een kop met alleen een intro staat onder elkaar (gaat vanzelf in `.kolommen`). Zet nooit een grote kop in een smalle kolom met een leeg vlak ernaast.
- Geen drie gelijke kaarten, behalve de prijskaarten: daar is het de bedoeling.
- Alles recht, niets gekanteld.

## 6. Diepte
Harde schaduw alleen op: de gele knop, het auditblad, het formulier, de aanrader en portretten. Geen zachte schaduwen, geen verlopen.

## 7. Beweging
- Kleur die meeloopt, woorden die oplichten, de ring, de werkbaan en `data-in` (één keer 20px omhoog).
- Alles staat stil bij `prefers-reduced-motion`. Geen video, geen libraries.

## 8. Responsief
Eerst 375px, dan desktop. Controleer 320px op zijwaarts scrollen. Lange woorden (Keukenontwerpers) mogen niet buiten beeld vallen.

## 9. Werkwijze
- **Nieuwe case:** kopieer `site/cases/_sjabloon.html`, vul de `[INVULLEN]`-plekken in en zet een kaart op `site/cases.html`. De build zet de pagina vanzelf in de sitemap en laat het sjabloon weg.
- **Nieuwe pagina:** kopieer kop, menu en voet van een bestaande pagina, begin met `.paginaheld` en eindig met een blauw slot met de gratis audit (op /coaching: de kennismaking).
- **Nieuw kennisartikel:** kopieer `site/wat-kost-social-media-uitbesteden.html` en voeg het pad toe aan de lijst in `scripts/build-site.mjs`.
- `site/assets/js/boost.js` regelt het scrollgedrag; `site/assets/js/site.js` regelt cookies, meting en formulieren.
- Bedankpagina's en 404 staan op `noindex`.
