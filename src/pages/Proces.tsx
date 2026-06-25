import { CTASection } from "@/components/CTASection";
import { Highlight } from "@/components/Highlight";
import { PageHero } from "@/components/PageHero";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
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
        title={
          <>
            Zo werken we <Highlight variant="underline">samen</Highlight>.
          </>
        }
        intro="Een heldere aanpak in vier stappen. Met energie, oog voor detail en steeds één vast aanspreekpunt."
      />

      <Section>
        <SectionHeading
          align="center"
          eyebrow="Onze aanpak"
          title={
            <>
              Van eerste gesprek tot blijvende <Highlight>groei</Highlight>.
            </>
          }
          intro="Zonder heldere aanpak geen groei. Daarom werken we in vier vaste stappen, steeds samen met jou en met één vast aanspreekpunt. Zo weet je altijd waar we staan en waar we naartoe werken."
        />

        <div className="mt-14">
          <ProcessTimeline />
        </div>

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
