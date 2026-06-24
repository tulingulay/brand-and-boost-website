import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { serviceIcons } from "@/components/icons";
import { Card } from "@/components/ui/card";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];

  return (
    <Link
      to={`/diensten/${service.slug}`}
      aria-label={`Meer over ${service.title}`}
      className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Card className="flex h-full flex-col p-6 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-soft-lg">
        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-kobalt group-hover:text-white">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="font-heading text-lg font-bold text-antraciet">{service.title}</h3>
        <p className="mt-2 flex-1 text-muted-foreground">{service.description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Meer over deze dienst
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </Card>
    </Link>
  );
}
