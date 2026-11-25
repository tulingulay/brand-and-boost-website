# Ontwerpsysteem Brand & Boost: Het rapport

Lees dit bestand voordat je een pagina maakt of aanpast. Merk, kleuren, prijzen en regels staan in `CLAUDE.md`; dit bestand beschrijft alleen de vorm.

## Idee

De site leest als ons eigen auditrapport: een omslag, genummerde hoofdstukken met de naam in de marge, en een slot met één vraag. Zo laat de vorm zien wat we zeggen: eerst het hele plaatje.

## Bestanden

- `site/assets/css/site.css`: basis en tokens (kleuren, fonts, knoppen, formulieren).
- `site/assets/css/rapport.css`: het rapport-systeem. Geldt op elke pagina met `<body class="rapport">` en laadt na `site.css`.
- Kleuren altijd via tokens (`var(--blauw)`), nooit een losse hexwaarde.

## Bouwstenen

| Bouwsteen | Klasse | Gebruik |
|---|---|---|
| Omslag | `.omslag` | Alleen de homepage: bovenregel, kop over de volle breedte, auditblad dat over de rand hangt |
| Paginahero | `.paginahero` | Andere pagina's: bovenregel met paginanaam, grote kop, geen cursief woord |
| Hoofdstuk | `.sectiekop` met `.label` (of `.hfd` op home) | Nummer en naam in de marge, kop ernaast. Het nummer telt vanzelf |
| Los label | `.label` buiten een sectiekop | Kort blauw streepje met naam, zonder nummer |
| Auditblad | `.blad`, `.formkaart` | Wit vel met een hemelblauw vel erachter. Alleen voor de audit en formulieren |
| Staafgrafiek | `.trap` | Alleen de werkwijze op home: elke stap een hogere staaf |
| Treden | `.stappen` | Stappen op andere pagina's: groot cijfer op een lijn, elke stap een trede lager |
| Dienstregels | `.pijlers` | Grote regels over de volle breedte die blauw kleuren bij hover |
| Vitrine | `.vitrine`, `.werk` | Werk in beeld: één groot, de rest kleiner en verspringend. Geen dozen om de beelden |
| Pakketten | `.pakket` | Papier met blauwe lijn erboven. Alleen de aanrader is blauw met gele schaduw |
| Citaat | `.citaat` met `.stift` | Groot citaat, hooguit één stuk met markeerstift |
| Slot | `.slot`, `.afsluiter` | Geen kaart: blauwe lijn, één grote vraag, één knop |

## Regels van dit systeem

- Hoeken zijn 6px (papier). Alleen knoppen en tags zijn rond.
- Harde schaduw alleen op: de gele knop, het auditblad of formulier, en het aanrader-pakket.
- Het pijl-icoon alleen in knoppen, links en opsommingen. Niet als label of versiering.
- Geel alleen als: knop, markeerstift, de streep onder "boost", de rand van de derde staaf, het vlak achter een portret.
- Het cursieve, onderstreepte woord alleen bij "boost" in de slogan.
- Geen drie gelijke kaarten naast elkaar. Maak er één groter of laat ze verspringen.
- Beweging: alleen hover (160 ms) en de groeiende staven op home. Geen fade-in bij scrollen.
- Alles recht. Niets gekanteld.
- Eerst 375px, dan desktop. Controleer ook 320px op horizontaal scrollen.

## Nieuwe pagina

1. Kopieer kop en footer van een bestaande pagina en zet `class="rapport"` op `<body>`.
2. Begin met een `.paginahero`, daarna hoofdstukken met een `.sectiekop`.
3. Eindig met één `.afsluiter` met de gratis audit (op /coaching: de kennismaking).
4. Kennisartikelen: gebruik dezelfde paginahero en zet de tekst in `.lees`. Tussenkoppen worden hoofdstukken.
