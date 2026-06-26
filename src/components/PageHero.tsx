import * as React from "react";

import { Reveal } from "@/components/Reveal";

interface PageHeroProps {
  /** Niet meer getoond, maar behouden zodat bestaande aanroepen blijven werken. */
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  children?: React.ReactNode;
}

/**
 * Editorial paginakop (de enige <h1> van de pagina) op een creme vlak.
 */
export function PageHero({ title, children }: PageHeroProps) {
  return (
    <section className="bg-creme">
      <div className="container pt-28 pb-section-sm sm:pt-36">
        <Reveal>
          <h1 className="max-w-[15ch] text-display font-bold text-antraciet">{title}</h1>
        </Reveal>

        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
