import * as React from "react";

import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  /** Klassen op de buitenste <section> (bijv. een achtergrondkleur). */
  className?: string;
  /** Klassen op de binnenste container. */
  innerClassName?: string;
  /** Decoratieve, absoluut gepositioneerde elementen op de achtergrond. */
  decoration?: React.ReactNode;
  children: React.ReactNode;
}

/** Standaard sectie met verticale ruimte en een gecentreerde container. */
export function Section({ id, className, innerClassName, decoration, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20 lg:py-24", decoration && "relative overflow-hidden", className)}
    >
      {decoration}
      <div className={cn("container relative", innerClassName)}>{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  /** Lichte variant voor op een donkere/kobalt achtergrond. */
  light?: boolean;
  className?: string;
}

/** Kop-blok voor een sectie: boventitel (eyebrow), titel en intro. Ze komen
 *  trapsgewijs (cascade) in beeld voor een mooie binnenkomst. */
export function SectionHeading({ eyebrow, title, intro, align = "left", light = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal className={cn("mb-5", align === "center" && "flex justify-center")}>
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={eyebrow ? 90 : 0}>
        <h2 className={cn("text-h2", light && "text-white")}>{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={eyebrow ? 180 : 90}>
          <p className={cn("mt-4 text-lead", light ? "text-white/85" : "text-muted-foreground")}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
