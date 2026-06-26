import * as React from "react";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  /** Klassen op de buitenste <section> (bijv. een achtergrondkleur). */
  className?: string;
  /** Klassen op de binnenste container. */
  innerClassName?: string;
  /** Tijdelijk: decoratieve elementen (worden uitgefaseerd in de editorial stijl). */
  decoration?: React.ReactNode;
  children: React.ReactNode;
}

/** Standaard sectie met een vast verticaal ritme en een gecentreerde container. */
export function Section({ id, className, innerClassName, decoration, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-section", decoration && "relative overflow-hidden", className)}>
      {decoration}
      <div className={cn("container relative", innerClassName)}>{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  /** Niet meer getoond, maar behouden zodat bestaande aanroepen blijven werken. */
  eyebrow?: string;
  /** Niet meer getoond, maar behouden zodat bestaande aanroepen blijven werken. */
  index?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  /** Lichte variant voor op een donker (kobalt) vlak. */
  light?: boolean;
  className?: string;
}

/** Editorial kop-blok: grote titel en intro. */
export function SectionHeading({ title, intro, align = "left", light = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Reveal>
        <h2 className={cn("text-h2", light ? "text-creme" : "text-antraciet")}>{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={90}>
          <p className={cn("mt-5 text-lead", light ? "text-creme/80" : "text-muted-foreground")}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
