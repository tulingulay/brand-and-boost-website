/**
 * Het 4-stappen proces van Brand & Boost.
 * Concept-copy, mag door de klant aangepast worden. `description` is de korte
 * regel (Home), `detail` de uitgebreide versie (Proces-pagina).
 */

export interface ProcessStep {
  number: string;
  title: string;
  /** Pakkende subkop onder de titel (Vrolijk-aanpakstijl). */
  subtitle: string;
  description: string;
  detail: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Kennismaking",
    subtitle: "Eerst luisteren, dan pas plannen.",
    description: "Wij leren je merk, je doelen en je situatie kennen in een open gesprek.",
    detail:
      "Alles begint met een goed gesprek. Wij duiken in je merk, je ambities en waar je nu staat, met oprechte interesse en zonder poespas. Zo snappen wij precies wat jou drijft en wat je nodig hebt om te groeien.",
  },
  {
    number: "02",
    title: "Strategie en plan",
    subtitle: "De route naar groei, helder op papier.",
    description: "Wij vertalen je ambitie naar een helder plan met richting en prioriteiten.",
    detail:
      "Daarna vertalen wij je ambitie naar een helder plan. Samen bepalen wij de richting, leggen wij prioriteiten en kiezen wij de aanpak die het meeste oplevert. Geen vaag verhaal, maar een concreet plan waar je achter staat.",
  },
  {
    number: "03",
    title: "Uitvoering",
    subtitle: "Mouwen opstropen en bouwen.",
    description: "Wij gaan aan de slag, met energie en oog voor detail. Jij houdt één aanspreekpunt.",
    detail:
      "Nu wordt het concreet. Wij gaan met energie aan de slag en houden oog voor detail. Jij hebt steeds één vast aanspreekpunt en korte lijnen, dus je weet altijd waar je aan toe bent. Geen gedoe, geen ruis.",
  },
  {
    number: "04",
    title: "Optimalisatie en groei",
    subtitle: "Meten, bijsturen, doorgroeien.",
    description: "Wij meten, sturen bij en blijven verbeteren op wat echt werkt.",
    detail:
      "Een merk groeit door te blijven verbeteren. Wij meten wat werkt, sturen bij op de cijfers en bouwen door op wat écht verschil maakt. Zo wordt marketing geen eenmalig project, maar een motor voor blijvende groei.",
  },
];
