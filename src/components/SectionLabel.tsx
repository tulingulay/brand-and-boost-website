import * as React from "react";

import { cn } from "@/lib/utils";

interface SectionLabelProps {
  /** Indexnummer, bv. "01". Het signatuurelement van de site. */
  index?: string;
  children: React.ReactNode;
  /** Lichte variant voor op een donker (kobalt/kobalt) vlak. */
  light?: boolean;
  className?: string;
}

/**
 * Signatuur-kicker: een genummerde index-aanduiding ("01 / Label") met een
 * dunne lijn. Komt boven elke sectie terug en geeft de site zijn editorial,
 * magazine-achtige ritme.
 */
export function SectionLabel({ index, children, light = false, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {index && (
        <span className={cn("font-heading text-sm font-bold tabular-nums", light ? "text-zonnegeel" : "text-kobalt")}>
          {index}
        </span>
      )}
      <span aria-hidden="true" className={cn("h-px w-10", light ? "bg-creme/40" : "bg-antraciet/25")} />
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.2em]",
          light ? "text-creme/80" : "text-antraciet/60",
        )}
      >
        {children}
      </span>
    </div>
  );
}
