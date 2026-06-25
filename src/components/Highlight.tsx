import * as React from "react";

import { cn } from "@/lib/utils";

type HighlightColor = "zonnegeel" | "kobalt" | "kastanje";

/** Markerkleur (highlighter-swash achter het woord). */
const markerClass: Record<HighlightColor, string> = {
  zonnegeel: "bg-zonnegeel/35",
  kobalt: "bg-kobalt/20",
  kastanje: "bg-kastanje/20",
};

/** Penseelkleur voor de underline-variant. */
const strokeClass: Record<HighlightColor, string> = {
  zonnegeel: "text-zonnegeel",
  kobalt: "text-kobalt",
  kastanje: "text-kastanje",
};

interface HighlightProps {
  children: React.ReactNode;
  /** Accentkleur. Standaard zonnegeel. */
  color?: HighlightColor;
  /** "marker" = highlighter achter het woord, "underline" = penseelstreep eronder. */
  variant?: "marker" | "underline";
  className?: string;
}

/**
 * Markeert een kernwoord in een kop of zin, als warm merkaccent. Twee stijlen:
 * een highlighter-swash achter het woord ("marker") of een losse penseelstreep
 * eronder ("underline"). De swash/streep ligt achter de tekst (decoratief).
 */
export function Highlight({ children, color = "zonnegeel", variant = "marker", className }: HighlightProps) {
  return (
    <span className={cn("relative inline-block whitespace-nowrap", className)}>
      {variant === "marker" ? (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-x-[-0.12em] bottom-[0.06em] top-[0.34em] -rotate-[1.4deg] rounded-[0.28em]",
            markerClass[color],
          )}
        />
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 120 12"
          preserveAspectRatio="none"
          className={cn("absolute inset-x-0 -bottom-[0.16em] h-[0.34em] w-full", strokeClass[color])}
        >
          <path
            d="M2 8c28-5 58 3 88-2 13-2 23 1 28 0"
            fill="none"
            stroke="currentColor"
            strokeWidth={5}
            strokeLinecap="round"
          />
        </svg>
      )}
      <span className="relative">{children}</span>
    </span>
  );
}
