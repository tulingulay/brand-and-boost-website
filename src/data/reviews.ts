/**
 * Klantreviews (echt). Petra staat eerst: zij verschijnt op de homepage en als
 * eerste op de portfoliopagina. De derde review volgt later.
 */

export interface Review {
  quote: string;
  name: string;
  company: string;
}

export const reviews: Review[] = [
  {
    quote:
      "Ik ben heel tevreden met mijn site. Hij had echt een update nodig. Pien en Isa hebben de tijd genomen om mij en mijn bedrijf te leren kennen. Hierdoor heb ik een mooie site gekregen die bij mijn bedrijf past. En weer helemaal up to date is.",
    name: "Petra Scheffer",
    company: "You and Me Beauty Salon",
  },
  {
    quote:
      "De adviezen en hulp van Pien zijn super. Ze is goed bereikbaar en ze reageert altijd snel. Absoluut een aanrader!",
    name: "Barry Scheffer",
    company: "Scheffer Letselschade",
  },
];
