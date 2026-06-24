import { Check } from "lucide-react";

import { Card } from "@/components/ui/card";
import { processSteps } from "@/data/process";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface AccentStyle {
  badge: string;
  ring: string;
  text: string;
  chip: string;
}

const ACCENTS: AccentStyle[] = [
  { badge: "bg-kobalt text-white", ring: "ring-kobalt/15", text: "text-kobalt", chip: "bg-kobalt/10 text-kobalt" },
  {
    badge: "bg-zonnegeel text-antraciet",
    ring: "ring-zonnegeel/25",
    text: "text-[#9a7209]",
    chip: "bg-zonnegeel/20 text-[#8a6608]",
  },
  { badge: "bg-kastanje text-white", ring: "ring-kastanje/15", text: "text-kastanje", chip: "bg-kastanje/10 text-kastanje" },
  { badge: "bg-kobalt text-white", ring: "ring-kobalt/15", text: "text-kobalt", chip: "bg-kobalt/10 text-kobalt" },
];

export function ProcessTimeline() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Zigzag-pad naar stap 4 (desktop) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M52 4 L27 28 L73 52 L27 76 L66 97"
          stroke="hsl(var(--kobalt))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1 3"
          opacity="0.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M66 97l-3.5-2M66 97l1-4"
          stroke="hsl(var(--kobalt))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <ol className="relative space-y-8 lg:space-y-12">
        {processSteps.map((step, index) => {
          const isLeft = index % 2 === 0;
          const accent = ACCENTS[index];
          const Icon = step.icon;
          return (
            <li key={step.number} className={cn("lg:w-[54%]", isLeft ? "lg:mr-auto" : "lg:ml-auto")}>
              <Reveal direction={isLeft ? "left" : "right"}>
                <Card className="p-6 sm:p-7">
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Custom genummerde badge met stap-icoon */}
                    <div className="relative shrink-0">
                      <span
                        className={cn(
                          "flex h-16 w-16 items-center justify-center rounded-[1.4rem] font-heading text-2xl font-bold shadow-soft ring-4 sm:h-[4.5rem] sm:w-[4.5rem]",
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

                    <div className="pt-1">
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider",
                          accent.chip,
                        )}
                      >
                        Stap {step.number}
                      </span>
                      <h2 className="mt-2 font-heading text-h3 font-bold text-antraciet">{step.title}</h2>
                    </div>
                  </div>

                  <p className="mt-4 text-muted-foreground">{step.detail}</p>

                  <ul className="mt-5 space-y-2.5">
                    {step.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-antraciet/80">
                        <Check className={cn("mt-0.5 h-4 w-4 shrink-0", accent.text)} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
