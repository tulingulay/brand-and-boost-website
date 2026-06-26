import type { CaseItem } from "@/data/cases";

/**
 * Eén portfolio-flip-card: de voorkant toont het (transparante) logo van de
 * klant, bij hover of focus draait de kaart om en verschijnt het werk dat wij
 * maakten. Klanten zonder beschikbaar logo tonen wij als wordmark.
 */
export function PortfolioFlipCard({ item }: { item: CaseItem }) {
  return (
    <div
      tabIndex={0}
      aria-label={`${item.title} — hover of focus om het werk te zien`}
      className="group/flip aspect-[16/10] rounded-[3px] [perspective:1200px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kobalt focus-visible:ring-offset-2 focus-visible:ring-offset-creme"
    >
      <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover/flip:[transform:rotateY(180deg)] group-focus/flip:[transform:rotateY(180deg)] motion-reduce:transition-none">
        {/* Voorkant: logo */}
        <div className="absolute inset-0 flex flex-col rounded-[3px] border border-antraciet/15 bg-white [backface-visibility:hidden]">
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
          <p className="border-t border-antraciet/10 px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-antraciet/40">
            Hover voor het werk
          </p>
        </div>

        {/* Achterkant: het werk */}
        <div className="absolute inset-0 overflow-hidden rounded-[3px] border-2 border-kobalt [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <img
            src={item.image}
            alt={item.imageAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
