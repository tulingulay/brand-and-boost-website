/**
 * Kernwaarden van Brand & Boost (gebruikt op Home én Ons verhaal).
 */

export interface CoreValue {
  title: string;
  description: string;
}

export const coreValues: CoreValue[] = [
  {
    title: "Energie",
    description:
      "Wij brengen energie in alles wat wij doen. Je voelt het in onze aanpak, onze ideeën en de manier waarop wij samenwerken.",
  },
  {
    title: "Partnerschap",
    description: "Wij staan naast je, niet tegenover je. Eén team, één doel: jouw groei.",
  },
  {
    title: "Resultaatgericht",
    description: "Creativiteit met richting. Wij werken data-gedreven en sturen op wat echt verschil maakt.",
  },
  {
    title: "Transparant",
    description: "Duidelijke communicatie, eerlijke verwachtingen en geen verrassingen achteraf.",
  },
];
