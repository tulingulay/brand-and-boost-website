import { CTASection } from "@/components/CTASection";
import { Highlight } from "@/components/Highlight";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { ServiceCard } from "@/components/ServiceCard";
import { StatementBox } from "@/components/StatementBox";
import { services } from "@/data/services";

export default function Diensten() {
  return (
    <>
      <SEO
        title="Diensten · Brand & Boost"
        description="Van branding en contentcreatie tot SEO, AEO en Meta advertenties. Bekijk de diensten van Brand & Boost, altijd op maat, met één aanspreekpunt."
        path="/diensten"
      />

      <PageHero
        eyebrow="Diensten"
        title={
          <>
            Alles wat je merk nodig heeft om te <Highlight variant="underline">groeien</Highlight>.
          </>
        }
        intro="Zeven diensten, één aanspreekpunt. We werken op maat en kijken samen wat op dit moment het meest oplevert."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <StatementBox
            className="lg:max-w-2xl"
            label="Even sparren?"
            cta={{ label: "Plan een strategiegesprek", to: "/contact" }}
          >
            Niet zeker welke dienst je nodig hebt? Wij denken graag met je mee.
          </StatementBox>
        </Reveal>
      </Section>

      <CTASection
        title="Benieuwd wat bij jou past?"
        text="Op ieder potje past een dekseltje. In een open gesprek kijken we wat voor jouw merk het meest oplevert."
      />
    </>
  );
}
