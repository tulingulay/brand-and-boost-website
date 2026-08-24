/**
 * Klantreviews (echt). Petra staat eerst: zij verschijnt op de homepage en als
 * eerste op de portfoliopagina. De review van Esther is een ingekorte versie
 * van een langere review (kern + aanbeveling).
 */

export interface Review {
  quote: string;
  name: string;
  company: string;
  /** Functie/rol, alleen tonen als die bekend is. */
  role?: string;
  /** Bron van de review (bijv. "Google"), alleen tonen als die bekend is. */
  source?: string;
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
  {
    quote:
      "Pien is ontzettend fijn om mee samen te werken: professioneel, betrokken en heel prettig in de communicatie. Ze houdt de regie over het hele proces, denkt in oplossingen en neemt echt verantwoordelijkheid. Een echte aanpakker die met je meedenkt. Ik kan Brand & Boost van harte aanbevelen aan iedereen die op zoek is naar een professionele, betrokken en daadkrachtige partner voor social media.",
    name: "Esther van de Burg Hartog",
    company: "E. Touch Beauty & Mind",
  },
];
