import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StatementBoxProps {
  /** Klein label boven de statement. */
  label?: string;
  /** De pakkende tekst. */
  children: React.ReactNode;
  className?: string;
  /** Lichte rotatie voor een asymmetrisch, speels effect (alleen op desktop). */
  rotate?: boolean;
  /** Compactere variant, bijv. als tegel in een grid. */
  compact?: boolean;
  /** Optionele call-to-action onder de statement. */
  cta?: { label: string; to: string };
}

/**
 * Zonnegeel statement-vak met een pakkende, on-brand tekst. Donkere tekst op
 * goud voor goed contrast; een subtiel aanhalingsteken als accent. Optioneel
 * met een call-to-action.
 */
export function StatementBox({ label, children, className, rotate, compact, cta }: StatementBoxProps) {
  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-3xl bg-zonnegeel text-antraciet shadow-soft-lg",
        compact ? "p-6" : "p-8 sm:p-10",
        rotate && "lg:-rotate-2",
        className,
      )}
    >
      <Quote aria-hidden="true" className="absolute -right-2 -top-2 h-16 w-16 text-antraciet/10" />
      <div className="relative">
        {label && <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-antraciet">{label}</p>}
        <p
          className={cn(
            "font-heading font-bold leading-tight text-antraciet",
            compact ? "text-xl" : "text-2xl sm:text-[1.75rem]",
          )}
        >
          {children}
        </p>
        {cta && (
          <Button asChild className="group mt-6">
            <Link to={cta.to}>
              {cta.label}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
