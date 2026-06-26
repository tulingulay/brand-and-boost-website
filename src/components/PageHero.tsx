import * as React from "react";

import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  children?: React.ReactNode;
}

/**
 * Editorial paginakop (de enige <h1> van de pagina). Asymmetrisch op een
 * creme vlak: grote kop links, intro rechts onderaan uitgelijnd. Geen
 * gradient, geen golf, geen decoratieve blobs.
 */
export function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="bg-creme">
      <div className="container pt-28 pb-section-sm sm:pt-36">
        {eyebrow && (
          <Reveal>
            <SectionLabel>{eyebrow}</SectionLabel>
          </Reveal>
        )}
        <Reveal delay={eyebrow ? 90 : 0}>
          <h1 className="mt-7 max-w-[15ch] text-display font-bold text-antraciet">{title}</h1>
        </Reveal>

        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
