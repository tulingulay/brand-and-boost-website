import * as React from "react";

import { Reveal } from "@/components/Reveal";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}

/** Compacte hero bovenaan de subpagina's (bevat de enige <h1> van de pagina). */
export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-creme">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-kobalt/10 blur-2xl"
      />
      <div className="container relative py-14 sm:py-20">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
          )}
          <h1 className="text-h1">{title}</h1>
          {intro && <p className="mt-5 text-lead text-muted-foreground">{intro}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
