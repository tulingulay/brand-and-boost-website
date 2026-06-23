import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface NumberedCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

/** Genummerde kaart, gebruikt voor kernwaarden, merkbelofte en proces. */
export function NumberedCard({ number, title, description, className }: NumberedCardProps) {
  return (
    <Card className={cn("h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg", className)}>
      <span aria-hidden="true" className="font-heading text-3xl font-bold text-kobalt/80">
        {number}
      </span>
      <h3 className="mt-3 font-heading text-lg font-bold text-antraciet">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </Card>
  );
}
