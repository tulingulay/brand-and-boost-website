import type { ComponentType, SVGProps } from "react";

import { EnergieIcon, PartnerschapIcon, ResultaatIcon, TransparantIcon } from "@/components/BrandIcons";

/**
 * Kernwaarden van Brand & Boost (gebruikt op Home én Ons verhaal).
 * Met een custom icoon en accentkleur per waarde (speelser dan genummerd).
 */

export type Accent = "kobalt" | "zonnegeel" | "kastanje";

/** Icoon-component (custom of Lucide) dat SVG-props accepteert. */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface CoreValue {
  title: string;
  description: string;
  icon: IconComponent;
  accent: Accent;
}

export const coreValues: CoreValue[] = [
  {
    title: "Energie",
    description:
      "Wij brengen energie in alles wat wij doen. Je voelt het in onze aanpak, onze ideeën en de manier waarop wij samenwerken.",
    icon: EnergieIcon,
    accent: "zonnegeel",
  },
  {
    title: "Partnerschap",
    description: "Wij staan naast je, niet tegenover je. Eén team, één doel: jouw groei.",
    icon: PartnerschapIcon,
    accent: "kobalt",
  },
  {
    title: "Resultaatgericht",
    description: "Creativiteit met richting. Wij werken data-gedreven en sturen op wat echt verschil maakt.",
    icon: ResultaatIcon,
    accent: "kastanje",
  },
  {
    title: "Transparant",
    description: "Duidelijke communicatie, eerlijke verwachtingen en geen verrassingen achteraf.",
    icon: TransparantIcon,
    accent: "kobalt",
  },
];
