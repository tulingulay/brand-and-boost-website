import * as React from "react";

import { Reveal } from "@/components/Reveal";

interface PageHeroProps {
  title: React.ReactNode;
  /** Lead-paragraaf onder de kop; zet de pagina in één zin neer. */
  intro?: string;
  children?: React.ReactNode;
}

/**
 * Editorial paginakop (de enige <h1> van de pagina) op een creme vlak.
 */
export function PageHero({ title, intro, children }: PageHeroProps) {
  return (
    <section className="bg-creme">
      <div className="container pt-28 pb-section-sm sm:pt-36">
        <Reveal>
          <h1 className="max-w-[15ch] text-display font-bold text-antraciet">{title}</h1>
        </Reveal>

        {intro && (
          <Reveal delay={90}>
            <p className="mt-6 max-w-xl text-lead text-muted-foreground">{intro}</p>
          </Reveal>
        )}

        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
