import { serviceIcons } from "@/components/icons";
import { Card } from "@/components/ui/card";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];

  return (
    <Card className="group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
      <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-kobalt group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="font-heading text-lg font-bold text-antraciet">{service.title}</h3>
      <p className="mt-2 text-muted-foreground">{service.description}</p>
    </Card>
  );
}
