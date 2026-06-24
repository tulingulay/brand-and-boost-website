import * as React from "react";

import { DecoDots } from "@/components/Decorations";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { WAVE_PATH } from "@/components/WaveDivider";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}

/**
 * Full-bleed kobalt hero bovenaan de subpagina's (bevat de enige <h1> van de
 * pagina). Loopt met een creme golf over in de sectie eronder.
 */
export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-kobalt to-[#0e5990]">
      {/* Decoratieve accenten */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-1/4 h-56 w-56 rounded-full bg-zonnegeel/15 blur-3xl"
      />
      <DecoDots className="absolute right-10 top-10 hidden text-white/10 lg:block" />

      <div className="container relative z-10 py-16 pb-24 sm:py-24 sm:pb-32">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <div className="mb-5">
              <Eyebrow light>{eyebrow}</Eyebrow>
            </div>
          )}
          <h1 className="text-h1 text-white">{title}</h1>
          {intro && <p className="mt-5 text-lead text-white/85">{intro}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>

      {/* Golvende overgang naar de creme sectie eronder */}
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[1] h-8 w-full fill-creme sm:h-12 lg:h-14"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path d={WAVE_PATH} />
      </svg>
    </section>
  );
}
