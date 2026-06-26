import { CTASection } from "@/components/CTASection";
import { Highlight } from "@/components/Highlight";
import { PageHero } from "@/components/PageHero";
import { ProcessNumbered } from "@/components/ProcessNumbered";
import { Section, SectionHeading } from "@/components/Section";
import { SEO } from "@/components/SEO";

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
            Zo werken wij <Highlight variant="underline">samen</Highlight>.
          </>
        }
        intro="Een heldere aanpak in vier stappen. Met energie, oog voor detail en steeds één vast aanspreekpunt."
      />

      <Section>
        <SectionHeading
          eyebrow="Onze aanpak"
          title={
            <>
              Van eerste gesprek tot blijvende <Highlight>groei</Highlight>.
            </>
          }
          intro="Zonder heldere aanpak geen groei. Daarom werken wij in vier vaste stappen, steeds samen met jou en met één vast aanspreekpunt. Zo weet je altijd waar wij staan en waar wij naartoe werken."
        />

        <div className="mt-14 sm:mt-20">
          <ProcessNumbered detailed />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
