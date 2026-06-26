import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceIndexProps {
  services: Service[];
  /** Lichte variant voor op een donker (kobalt) vlak. */
  light?: boolean;
}

/**
 * Diensten als editorial index-lijst: genummerde regels met dunne scheidslijnen.
 * Alleen nummer, titel en pijl. Geen iconen-in-rondjes, geen kaartenraster.
 */
export function ServiceIndex({ services, light = false }: ServiceIndexProps) {
  const line = light ? "border-creme/20" : "border-antraciet/15";
  const num = light ? "text-zonnegeel" : "text-kobalt";
  const title = light ? "text-creme" : "text-antraciet";

  return (
    <ul className={cn("border-t", line)}>
      {services.map((service) => (
        <li key={service.slug} className={cn("border-b", line)}>
          <Reveal>
            <Link
              to={`/diensten/${service.slug}`}
              className="group/row grid grid-cols-12 items-baseline gap-x-4 gap-y-1 py-6 sm:py-8"
            >
              <h3
                className={cn(
                  "col-span-11 font-heading text-2xl font-semibold leading-[1.05] transition-transform duration-300 group-hover/row:translate-x-1.5 sm:text-[2rem]",
                  title,
                )}
              >
                {service.title}
              </h3>

              <span
                className={cn(
                  "col-span-1 justify-self-end transition-all duration-300 group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5",
                  num,
                )}
              >
                <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
