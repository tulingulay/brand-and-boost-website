/**
 * Kernwaarden van Brand & Boost (gebruikt op Home én Ons verhaal).
 */

export interface CoreValue {
  number: string;
  title: string;
  description: string;
}

export const coreValues: CoreValue[] = [
  {
    number: "01",
    title: "Energie",
    description:
      "We brengen energie in alles wat we doen. Je voelt het in onze aanpak, onze ideeën en de manier waarop we samenwerken.",
  },
  {
    number: "02",
    title: "Partnerschap",
    description: "We staan naast je, niet tegenover je. Eén team, één doel: jouw groei.",
  },
  {
    number: "03",
    title: "Resultaatgericht",
    description: "Creativiteit met richting. We werken data-gedreven en sturen op wat echt verschil maakt.",
  },
  {
    number: "04",
    title: "Transparant",
    description: "Duidelijke communicatie, eerlijke verwachtingen en geen verrassingen achteraf.",
  },
];
