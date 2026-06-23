import { Card } from "@/components/ui/card";
import type { CaseItem } from "@/data/cases";

export function CaseCard({ item }: { item: CaseItem }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">{item.client}</p>
        <h3 className="mt-2 font-heading text-xl font-bold text-antraciet">{item.title}</h3>
        <p className="mt-2 flex-1 text-muted-foreground">{item.description}</p>
        {item.result && (
          <p className="mt-4 inline-flex items-center self-start rounded-full bg-accent px-3.5 py-1.5 text-sm font-semibold text-accent-foreground">
            {item.result}
          </p>
        )}
      </div>
    </Card>
  );
}
