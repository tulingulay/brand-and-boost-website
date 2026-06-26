import type { ReactNode } from "react";

interface SectionLabelProps {
  index?: string;
  children?: ReactNode;
  light?: boolean;
  className?: string;
}

/**
 * Uitgefaseerd. De genummerde kicker-labels ("01 / Label") zijn op verzoek
 * overal van de site verwijderd; dit component rendert daarom niets meer. De
 * props blijven bestaan zodat bestaande aanroepen blijven werken.
 */
export function SectionLabel(_props: SectionLabelProps) {
  return null;
}
