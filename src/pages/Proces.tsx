import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { StatementBox } from "@/components/StatementBox";
import { processSteps } from "@/data/process";

export default function Proces() {
  return (
    <>
      <SEO
        title="Proces — Brand & Boost"
        description="Van kennismaking en strategie tot uitvoering, optimalisatie en groei. Zo werkt Brand & Boost samen met ondernemers — met energie en één aanspreekpunt."
        path="/proces"
      />

      <PageHero
        eyebrow="Proces"
        title="Zo werken we samen."
        intro="Een heldere aanpak in vier stappen. Met energie, oog voor detail en steeds één vast aanspreekpunt."
      />

      <Section>
        <ol className="mx-auto max-w-3xl">
          {processSteps.map((step, index) => {
            const isLast = index === processSteps.length - 1;
            return (
              <li key={step.number} className="relative flex gap-6 pb-10 last:pb-0 sm:gap-8">
                {/* Verticale verbindingslijn */}
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute left-7 top-16 h-[calc(100%-3rem)] w-px bg-border sm:left-8"
                  />
                )}
                <Reveal className="shrink-0">
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-kobalt font-heading text-xl font-bold text-white shadow-soft sm:h-16 sm:w-16 sm:text-2xl"
                  >
                    {step.number}
                  </span>
                </Reveal>
                <Reveal delay={80} className="flex-1 pt-1.5 sm:pt-3">
                  <h2 className="font-heading text-h3 font-bold text-antraciet">{step.title}</h2>
                  <p className="mt-2 text-lead text-muted-foreground">{step.description}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <StatementBox label="Stap 1" cta={{ label: "Plan een strategiegesprek", to: "/contact" }}>
            Het begint met een goed gesprek. Daarna bouwen we samen verder.
          </StatementBox>
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}
