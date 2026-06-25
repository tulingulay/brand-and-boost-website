import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

import { serviceIllustrations } from "@/components/ServiceIllustrations";
import { Card } from "@/components/ui/card";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Illustration = serviceIllustrations[service.icon];

  return (
    <Link
      to={`/diensten/${service.slug}`}
      aria-label={`Meer over ${service.title}`}
      className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Card className="flex h-full flex-col overflow-hidden border-2 border-kastanje/30 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-kastanje/60 group-hover:shadow-soft-lg">
        {/* Custom illustratie */}
        <div className="relative aspect-[16/9] overflow-hidden border-b border-kastanje/20">
          <Illustration className="h-full w-full transition-transform duration-500 group-hover:scale-[1.06]" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-heading text-lg font-bold text-antraciet">{service.title}</h3>
          <p className="mt-2 text-muted-foreground">{service.description}</p>

          <ul className="mt-4 space-y-2">
            {service.offerings.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-antraciet/80">
                <Check className="h-4 w-4 shrink-0 text-kobalt" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary">
            Lees meer
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </Card>
    </Link>
  );
}
