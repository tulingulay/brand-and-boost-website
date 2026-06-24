import * as React from "react";

import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  /** Lichte variant voor op een donkere/kobalt achtergrond. */
  light?: boolean;
  className?: string;
}

/**
 * Boventitel als badge: een afgeronde pill met een zonnegeel stipje. Geeft de
 * sectie-labels meer aanwezigheid dan een losse regel tekst.
 */
export function Eyebrow({ children, light, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] ring-1",
        light ? "bg-white/15 text-white ring-white/25" : "bg-zonnegeel/15 text-kastanje ring-zonnegeel/40",
        className,
      )}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-zonnegeel" />
      {children}
    </span>
  );
}
