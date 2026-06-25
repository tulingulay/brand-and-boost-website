import { Check } from "lucide-react";

import { Card } from "@/components/ui/card";
import { processSteps } from "@/data/process";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface AccentStyle {
  badge: string;
  ring: string;
  text: string;
}

const ACCENTS: AccentStyle[] = [
  { badge: "bg-kobalt text-white", ring: "ring-kobalt/15", text: "text-kobalt" },
  { badge: "bg-zonnegeel text-antraciet", ring: "ring-zonnegeel/25", text: "text-[#9a7209]" },
  { badge: "bg-kastanje text-white", ring: "ring-kastanje/15", text: "text-kastanje" },
  { badge: "bg-kobalt text-white", ring: "ring-kobalt/15", text: "text-kobalt" },
];

/**
 * Aanpak in genummerde stappen (Vrolijk-stijl): elke stap heeft een nummer,
 * een pakkende subkop en uitleg, verbonden door een gestreepte kastanjelijn.
 */
export function ProcessTimeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Gestreepte kastanje-verbindingslijn tussen de stappen */}
      <span
        aria-hidden="true"
        className="absolute left-8 top-12 bottom-16 -ml-px border-l-2 border-dashed border-kastanje/40"
      />

      <ol className="space-y-8 sm:space-y-10">
        {processSteps.map((step, index) => {
          const accent = ACCENTS[index];
          const Icon = step.icon;
          return (
            <li key={step.number}>
              <Reveal>
                <div className="flex items-start gap-5 sm:gap-7">
                  {/* Genummerde badge met stap-icoon */}
                  <div className="relative z-10 shrink-0">
                    <span
                      className={cn(
                        "flex h-16 w-16 items-center justify-center rounded-[1.4rem] font-heading text-2xl font-bold shadow-soft ring-4",
                        accent.badge,
                        accent.ring,
                      )}
                    >
                      {step.number}
                    </span>
                    <span
                      className={cn(
                        "absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-xl bg-card shadow-soft ring-1 ring-border",
                        accent.text,
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Inhoud */}
                  <Card className="flex-1 p-6 sm:p-7">
                    <h2 className="font-heading text-h3 font-bold text-antraciet">{step.title}</h2>
                    <p className={cn("mt-1 font-heading text-lg font-semibold", accent.text)}>{step.subtitle}</p>
                    <p className="mt-3 text-muted-foreground">{step.detail}</p>

                    <ul className="mt-5 space-y-2.5">
                      {step.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-antraciet/80">
                          <Check className={cn("mt-0.5 h-4 w-4 shrink-0", accent.text)} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
