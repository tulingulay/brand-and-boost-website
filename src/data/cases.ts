/**
 * Portfolio-cases.
 *
 * TODO: dit zijn PLACEHOLDER-cases. Vervang titel, klant, omschrijving,
 * resultaat en beeld door echte cases. Voeg gerust meer toe of haal er weg.
 * Beeld: zet je afbeeldingen in /public en verwijs ernaar via `image`
 * (bijv. "/cases/mijn-case.jpg"). Houd `imageAlt` beschrijvend.
 */

export interface CaseItem {
  id: string;
  title: string;
  client: string;
  description: string;
  /** Optioneel kort resultaat, bijv. "Meer aanvragen via de website". */
  result?: string;
  image: string;
  imageAlt: string;
}

export const cases: CaseItem[] = [
  {
    id: "case-1",
    title: "TODO: titel van de case",
    client: "TODO: klantnaam",
    description:
      "TODO: korte omschrijving van het project. Wat was de vraag, wat hebben we gedaan en waarom paste het bij deze ondernemer?",
    result: "TODO: kort resultaat (optioneel)",
    image: "/cases/case-placeholder-1.svg",
    imageAlt: "TODO: beschrijvende alt-tekst voor het casebeeld",
  },
  {
    id: "case-2",
    title: "TODO: titel van de case",
    client: "TODO: klantnaam",
    description:
      "TODO: korte omschrijving van het project. Wat was de vraag, wat hebben we gedaan en waarom paste het bij deze ondernemer?",
    result: "TODO: kort resultaat (optioneel)",
    image: "/cases/case-placeholder-2.svg",
    imageAlt: "TODO: beschrijvende alt-tekst voor het casebeeld",
  },
  {
    id: "case-3",
    title: "TODO: titel van de case",
    client: "TODO: klantnaam",
    description:
      "TODO: korte omschrijving van het project. Wat was de vraag, wat hebben we gedaan en waarom paste het bij deze ondernemer?",
    image: "/cases/case-placeholder-3.svg",
    imageAlt: "TODO: beschrijvende alt-tekst voor het casebeeld",
  },
];
