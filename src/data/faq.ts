/**
 * Veelgestelde vragen.
 *
 * LET OP: dit zijn CONCEPT-vragen en -antwoorden. De klant mag ze nog
 * aanpassen, schrappen of aanvullen. Deze lijst voedt zowel de FAQ-pagina
 * als de FAQPage JSON-LD (structured data) — houd vraag en antwoord dus
 * inhoudelijk kloppend.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "Voor wie werken jullie?",
    answer:
      "Voor MKB-ondernemers die houden van hun vak en echt willen groeien. Geen mensen die hun bedrijf erbij doen, maar ambitieuze ondernemers die een partner zoeken.",
  },
  {
    question: "Werken jullie met vaste pakketten of op maat?",
    answer: "Op maat. Op ieder potje past een dekseltje, dus we kijken eerst wat bij jou past.",
  },
  {
    question: "Krijg ik één vast aanspreekpunt?",
    answer:
      "Ja. Eén aanspreekpunt voor al je diensten, zodat je nooit van het kastje naar de muur wordt gestuurd.",
  },
  {
    question: "Werken jullie data-gedreven?",
    answer:
      "Ja. We sturen op cijfers en op wat echt verschil maakt, zodat je weet waar je geld naartoe gaat.",
  },
  {
    question: "Wat maakt jullie anders dan een groot bureau?",
    answer:
      "Partnerschap in plaats van uurtje-factuurtje. We staan naast je, denken mee en blijven betrokken, ook na de start.",
  },
  {
    question: "Kan ik losse diensten afnemen of alles samen?",
    answer: "Allebei kan. We denken graag mee over wat op dit moment het meest oplevert.",
  },
  {
    // TODO: bevestig of de regio-informatie klopt (zit B&B in Rotterdam en
    // werken jullie door heel Nederland?). Pas zo nodig het antwoord aan.
    question: "In welke regio werken jullie?",
    answer: "We zitten in Rotterdam en werken voor ondernemers door heel Nederland.",
  },
];
