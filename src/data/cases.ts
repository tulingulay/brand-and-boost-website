/**
 * Portfolio-cases. Elke case is opgebouwd uit de vraag, onze aanpak ("boost")
 * en het resultaat.
 *
 * Beeld: zet je casefoto's in /public/cases en verwijs ernaar via `image`.
 * De huidige beelden zijn placeholders.
 */

export interface CaseItem {
  id: string;
  title: string;
  client: string;
  /** Transparant bedrijfslogo voor de flip-card-voorkant (optioneel). */
  logo?: string;
  /** De vraag van de klant. */
  challenge: string;
  /** Onze aanpak / boost. */
  approach: string;
  /** Het resultaat. */
  result: string;
  image: string;
  imageAlt: string;
}

export const cases: CaseItem[] = [
  {
    id: "scheffer-letselschade",
    title: "Scheffer Letselschade",
    client: "Barry Scheffer",
    logo: "/cases/logos/scheffer-letselschade.png",
    challenge:
      "Een professionele online fundering die direct zorgt voor autoriteit en online vindbaarheid.",
    approach:
      "Wij bouwden een splinternieuwe, betrouwbare WordPress-website met een strakke, conversiegerichte structuur. De focus lag hierbij volledig op een sterke online uitstraling die direct vertrouwen wekt bij de doelgroep.",
    result:
      "Een modern en professioneel online platform waarmee het kantoor direct autoriteit uitstraalt in de markt en optimaal vindbaar is voor cliënten. Marketing zonder omwegen.",
    image: "/cases/scheffer-letselschade.jpg",
    imageAlt: "Homepage van de website van Scheffer Letselschade",
  },
  {
    id: "you-and-me-beauty-salon",
    title: "You and Me Beauty Salon",
    client: "Petra Scheffer",
    logo: "/cases/logos/you-and-me.png",
    challenge:
      "De huidige website een flinke upgrade geven zonder alles compleet vanaf nul te moeten herbouwen.",
    approach:
      "Wij hebben de bestaande website volledig verfrist. Ons team zorgde voor een professionele content shoot op locatie voor high-end beeldmateriaal en herschreef de webteksten naar een aantrekkelijke, heldere structuur die aansluit bij de doelgroep.",
    result:
      "Een visueel aantrekkelijke, moderne website die direct de luxe sfeer van de salon ademt en zorgt voor een hogere conversie op de behandelingen.",
    image: "/cases/you-and-me.jpg",
    imageAlt: "Vernieuwde website van You and Me Beauty Salon",
  },
  {
    id: "e-touch",
    title: "E. Touch Beauty & Mind",
    client: "Esther van de Burg Hartog",
    logo: "/cases/logos/e-touch.png",
    challenge:
      "Structuur, rust en consistentie in de online aanwezigheid, zonder er zelf dagelijks mee bezig te hoeven zijn.",
    approach:
      "Volledige ontzorging via ons modulaire social media beheer. Na een grondige technische opschoning van de Meta Business Suite, verzorgen wij nu maandelijks de strategische contentkalender, professionele copywriting en de volledige inplanning van haar posts en stories.",
    result:
      "Een consistent, professioneel ritme op de social media kanalen dat de doelgroep continu inspireert, terwijl Esther zich 100% kan focussen op haar klanten in de salon.",
    image: "/cases/e-touch.jpg",
    imageAlt: "Instagram-feed van E. Touch Beauty & Mind",
  },
];
