import * as React from "react";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  /** Klassen op de buitenste <section> (bijv. een achtergrondkleur). */
  className?: string;
  /** Klassen op de binnenste container. */
  innerClassName?: string;
  children: React.ReactNode;
}

/** Standaard sectie met verticale ruimte en een gecentreerde container. */
export function Section({ id, className, innerClassName, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <div className={cn("container", innerClassName)}>{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

/** Kop-blok voor een sectie: boventitel (eyebrow), titel en intro. */
export function SectionHeading({ eyebrow, title, intro, align = "left", className }: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
      )}
      <h2 className="text-h2">{title}</h2>
      {intro && <p className="mt-4 text-lead text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}
