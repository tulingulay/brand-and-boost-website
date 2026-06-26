import { CTASection } from "@/components/CTASection";
import { Highlight } from "@/components/Highlight";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionLabel } from "@/components/SectionLabel";
import { SEO } from "@/components/SEO";
import { ServiceShowcase } from "@/components/ServiceShowcase";
import { ToolsStrip } from "@/components/ToolsStrip";

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

      <Section className="bg-creme">
        <SectionLabel index="01">Alle diensten</SectionLabel>
        <h2 className="mt-6 max-w-2xl text-h2 text-antraciet">Kies waar jouw merk nu het meest aan heeft.</h2>
        <div className="mt-12">
          <ServiceShowcase />
        </div>
      </Section>

      {/* ===== 02 — Tools ===== */}
      <Section className="bg-white">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          <Reveal className="col-span-12 lg:col-span-4">
            <SectionLabel index="02">Onze tools</SectionLabel>
            <h2 className="mt-6 text-h2 text-antraciet">Waar we mee werken.</h2>
            <p className="mt-4 text-muted-foreground">
              De programma's die we dagelijks inzetten om jouw merk te ontwerpen, bouwen en laten groeien.
            </p>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-8" delay={120}>
            <ToolsStrip />
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Benieuwd wat bij jou past?"
        text="Op ieder potje past een dekseltje. In een open gesprek kijken we wat voor jouw merk het meest oplevert."
      />
    </>
  );
}
