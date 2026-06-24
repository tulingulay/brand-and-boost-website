import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { StatementBox } from "@/components/StatementBox";

export default function Proces() {
  return (
    <>
      <SEO
        title="Proces · Brand & Boost"
        description="Van kennismaking en strategie tot uitvoering, optimalisatie en groei. Zo werkt Brand & Boost samen met ondernemers, met energie en één aanspreekpunt."
        path="/proces"
      />

      <PageHero
        eyebrow="Proces"
        title="Zo werken we samen."
        intro="Een heldere aanpak in vier stappen. Met energie, oog voor detail en steeds één vast aanspreekpunt."
      />

      <Section>
        <ProcessTimeline />

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
