/**
 * Het 4-stappen proces van Brand & Boost.
 * Concept-copy — mag door de klant aangepast worden.
 */

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Kennismaking",
    description: "We leren je merk, je doelen en je situatie kennen in een open gesprek.",
  },
  {
    number: "02",
    title: "Strategie en plan",
    description: "We vertalen je ambitie naar een helder plan met richting en prioriteiten.",
  },
  {
    number: "03",
    title: "Uitvoering",
    description: "We gaan aan de slag, met energie en oog voor detail. Jij houdt één aanspreekpunt.",
  },
  {
    number: "04",
    title: "Optimalisatie en groei",
    description: "We meten, sturen bij en blijven verbeteren op wat echt werkt.",
  },
];
