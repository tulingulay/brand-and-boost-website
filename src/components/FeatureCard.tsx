import { Card } from "@/components/ui/card";
import type { Accent, IconComponent } from "@/data/values";
import { cn } from "@/lib/utils";

/** Accent-stijlen voor het icoontegeltje (rust → hover). Alle combinaties
 *  houden voldoende contrast. */
const accentStyles: Record<Accent, string> = {
  kobalt: "bg-kobalt/10 text-kobalt group-hover:bg-kobalt group-hover:text-white",
  zonnegeel: "bg-zonnegeel/20 text-kobalt group-hover:bg-zonnegeel group-hover:text-antraciet",
  kastanje: "bg-kastanje/10 text-kastanje group-hover:bg-kastanje group-hover:text-white",
};

interface FeatureCardProps {
  icon: IconComponent;
  title: string;
  description: string;
  accent?: Accent;
}

export function FeatureCard({ icon: Icon, title, description, accent = "kobalt" }: FeatureCardProps) {
  return (
    <Card className="group h-full p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg">
      <span
        className={cn(
          "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110",
          accentStyles[accent],
        )}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="font-heading text-lg font-bold text-antraciet">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </Card>
  );
}
