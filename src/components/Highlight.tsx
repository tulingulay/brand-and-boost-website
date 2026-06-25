import * as React from "react";

import { cn } from "@/lib/utils";

type HighlightColor = "zonnegeel" | "kobalt" | "kastanje";

/** Markerkleur (highlighter-swash achter het woord). */
const markerClass: Record<HighlightColor, string> = {
  zonnegeel: "bg-zonnegeel/35",
  kobalt: "bg-kobalt/20",
  kastanje: "bg-kastanje/20",
};

/** Streepkleur voor de underline-variant. */
const barClass: Record<HighlightColor, string> = {
  zonnegeel: "bg-zonnegeel",
  kobalt: "bg-kobalt",
  kastanje: "bg-kastanje",
};

interface HighlightProps {
  children: React.ReactNode;
  /** Accentkleur. Standaard zonnegeel. */
  color?: HighlightColor;
  /** "marker" = highlighter achter het woord, "underline" = rechte streep eronder. */
  variant?: "marker" | "underline";
  className?: string;
}

/**
 * Markeert een kernwoord in een kop of zin, als warm merkaccent. Twee stijlen:
 * een highlighter-swash achter het woord ("marker") of een rechte streep
 * eronder ("underline"). Het accent ligt achter de tekst (decoratief).
 */
export function Highlight({ children, color = "zonnegeel", variant = "marker", className }: HighlightProps) {
  return (
    <span className={cn("relative inline-block whitespace-nowrap", className)}>
      {variant === "marker" ? (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-x-[-0.12em] bottom-[0.06em] top-[0.34em] rounded-[0.22em]",
            markerClass[color],
          )}
        />
      ) : (
        <span
          aria-hidden="true"
          className={cn("absolute inset-x-0 -bottom-[0.04em] h-[0.15em] rounded-full", barClass[color])}
        />
      )}
      <span className="relative">{children}</span>
    </span>
  );
}
