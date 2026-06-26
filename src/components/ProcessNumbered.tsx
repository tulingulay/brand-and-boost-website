import { Reveal } from "@/components/Reveal";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";

interface ProcessNumberedProps {
  /** Lichte variant voor op een donker (kobalt/kastanje) vlak. */
  light?: boolean;
  /** Toon de uitgebreide detailtekst (Proces-pagina) i.p.v. de korte regel. */
  detailed?: boolean;
}

/**
 * Proces als grote genummerde stappen (01, 02, 03, 04). Asymmetrisch: een fors
 * indexnummer links, inhoud rechts, gescheiden door dunne lijnen. Geen
 * iconenkaartjes.
 */
export function ProcessNumbered({ light = false, detailed = false }: ProcessNumberedProps) {
  const line = light ? "border-creme/20" : "border-antraciet/15";
  const num = light ? "text-zonnegeel" : "text-kastanje";
  const title = light ? "text-creme" : "text-antraciet";
  const sub = light ? "text-creme/90" : "text-kobalt";
  const desc = light ? "text-creme/70" : "text-muted-foreground";

  return (
    <ol>
      {processSteps.map((step, i) => (
        <li
          key={step.number}
          className={cn("grid grid-cols-12 gap-x-6 gap-y-3 py-10 sm:py-14", i > 0 && cn("border-t", line))}
        >
          <Reveal className="col-span-12 sm:col-span-4">
            <span className={`block font-heading text-index font-bold leading-none tabular-nums ${num}`}>
              {step.number}
            </span>
          </Reveal>
          <Reveal className="col-span-12 sm:col-span-7 sm:col-start-6" delay={80}>
            <h3 className={cn("font-heading text-2xl font-bold sm:text-[2rem]", title)}>{step.title}</h3>
            <p className={cn("mt-1.5 font-heading text-lg font-semibold", sub)}>{step.subtitle}</p>
            <p className={cn("mt-4 max-w-xl text-base leading-relaxed", desc)}>
              {detailed ? step.detail : step.description}
            </p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
