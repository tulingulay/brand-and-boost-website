import { useState } from "react";

import type { CaseItem } from "@/data/cases";
import { cn } from "@/lib/utils";

/**
 * Eén portfolio-flip-card: de voorkant toont het (transparante) logo van de
 * klant, de achterkant het werk dat wij maakten. Draait bij hover, maar ook
 * bij klik/Enter/Spatie zodat het op touchscreens en met het toetsenbord
 * werkt. Voor screenreaders is het een echte knop met aria-pressed en is de
 * niet-zichtbare zijde verborgen, zodat niet beide zijden worden voorgelezen.
 */
export function PortfolioFlipCard({ item }: { item: CaseItem }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((v) => !v)}
      aria-pressed={flipped}
      aria-label={`${item.title}, toon het werk`}
      className="group/flip block w-full aspect-[16/10] rounded-editorial text-left [perspective:1200px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kobalt focus-visible:ring-offset-2 focus-visible:ring-offset-creme"
    >
      <div
        className={cn(
          "relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover/flip:[transform:rotateY(180deg)] motion-reduce:transition-none",
          flipped && "[transform:rotateY(180deg)]",
        )}
      >
        {/* Voorkant: logo */}
        <div
          aria-hidden={flipped}
          className="absolute inset-0 flex flex-col rounded-editorial border border-antraciet/15 bg-white [backface-visibility:hidden]"
        >
          <div className="flex flex-1 items-center justify-center p-4">
            {item.logo ? (
              <img
                src={item.logo}
                alt={item.title}
                loading="lazy"
                className="max-h-32 w-auto max-w-[85%] object-contain sm:max-h-40"
              />
            ) : (
              <span className="text-center font-heading text-3xl font-bold leading-tight text-antraciet">
                {item.title}
              </span>
            )}
          </div>
          <p className="border-t border-antraciet/10 px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-antraciet/70">
            Tik voor het werk
          </p>
        </div>

        {/* Achterkant: het werk */}
        <div
          aria-hidden={!flipped}
          className="absolute inset-0 overflow-hidden rounded-editorial border-2 border-kobalt [transform:rotateY(180deg)] [backface-visibility:hidden]"
        >
          <img
            src={item.image}
            alt={item.imageAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </button>
  );
}
