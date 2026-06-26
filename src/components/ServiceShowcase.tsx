import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { services } from "@/data/services";
import { cn } from "@/lib/utils";

/**
 * Diensten als editorial showcase: een genummerde index-lijst links en rechts
 * een groot beeld dat meewisselt met de dienst waar je overheen zweeft
 * (magazine-stijl hover-reveal). Op mobiel staat de omschrijving onder elke
 * regel; het preview-beeld is dan verborgen.
 */
export function ServiceShowcase() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <div className="grid grid-cols-12 gap-x-8">
      {/* Index-lijst */}
      <ul className="col-span-12 border-t border-antraciet/15 lg:col-span-7">
        {services.map((service, i) => (
          <li
            key={service.slug}
            className="border-b border-antraciet/15"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
          >
            <Link
              to={`/diensten/${service.slug}`}
              className="group/row grid grid-cols-12 items-baseline gap-x-4 gap-y-2 py-6 sm:py-8"
            >
              <span className="col-span-2 font-heading text-base font-bold tabular-nums text-kobalt sm:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className={cn(
                  "col-span-9 font-heading text-2xl font-semibold leading-[1.05] transition-all duration-300 group-hover/row:translate-x-1.5 sm:col-span-9 sm:text-[2rem]",
                  i === active ? "text-kobalt" : "text-antraciet",
                )}
              >
                {service.title}
              </h3>
              <span className="col-span-1 justify-self-end text-kobalt transition-transform duration-300 group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5">
                <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="col-span-10 col-start-3 max-w-md text-sm text-muted-foreground sm:col-start-2 lg:hidden">
                {service.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      {/* Preview-beeld (desktop) */}
      <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden border border-antraciet/15">
            {services.map((service, i) => (
              <img
                key={service.slug}
                src={service.image}
                alt=""
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                  i === active ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>
          <p className="mt-5 text-muted-foreground">{current.description}</p>
          <Link
            to={`/diensten/${current.slug}`}
            className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-antraciet underline-offset-[6px] hover:underline"
          >
            Meer over {current.title.toLowerCase()}
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
