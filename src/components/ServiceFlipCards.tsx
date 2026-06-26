import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";

/**
 * Diensten als flip-over kaarten: de voorkant toont een fors indexnummer en de
 * dienstnaam, bij hover draait de kaart om en verschijnt de omschrijving.
 * Eén nette hover-interactie, in de huisstijlkleuren (creme -> zonnegeel).
 */
export function ServiceFlipCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, i) => (
        <Reveal key={service.slug} delay={(i % 4) * 70}>
          <Link
            to={`/diensten/${service.slug}`}
            className="group/flip block h-60 rounded-[3px] [perspective:1200px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zonnegeel focus-visible:ring-offset-2 focus-visible:ring-offset-kobalt"
          >
            <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover/flip:[transform:rotateY(180deg)] group-focus-visible/flip:[transform:rotateY(180deg)] motion-reduce:transition-none">
              {/* Voorkant */}
              <div className="absolute inset-0 flex flex-col justify-between rounded-[3px] bg-creme p-6 [backface-visibility:hidden]">
                <span className="font-heading text-7xl font-bold leading-none tabular-nums text-kobalt">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-2xl font-bold leading-[1.05] text-antraciet">{service.title}</h3>
              </div>
              {/* Achterkant */}
              <div className="absolute inset-0 flex flex-col justify-between rounded-[3px] bg-zonnegeel p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="text-[0.95rem] leading-relaxed text-antraciet">{service.description}</p>
                <span className="inline-flex items-center gap-1.5 font-heading text-base font-bold text-antraciet">
                  Lees meer
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
