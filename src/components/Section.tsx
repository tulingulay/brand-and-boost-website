import * as React from "react";

import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
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
  eyebrow?: string;
  /** Indexnummer voor de signatuur-kicker, bv. "02". */
  index?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  /** Lichte variant voor op een donker (kobalt/kastanje) vlak. */
  light?: boolean;
  className?: string;
}

/** Editorial kop-blok: genummerde kicker, grote titel en intro. */
export function SectionHeading({
  eyebrow,
  index,
  title,
  intro,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal className={cn("mb-6", align === "center" && "flex justify-center")}>
          <SectionLabel index={index} light={light}>
            {eyebrow}
          </SectionLabel>
        </Reveal>
      )}
      <Reveal delay={eyebrow ? 90 : 0}>
        <h2 className={cn("text-h2", light ? "text-creme" : "text-antraciet")}>{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={eyebrow ? 180 : 90}>
          <p className={cn("mt-5 text-lead", light ? "text-creme/80" : "text-muted-foreground")}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
