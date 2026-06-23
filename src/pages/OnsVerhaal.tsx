import { CTASection } from "@/components/CTASection";
import { NumberedCard } from "@/components/NumberedCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { coreValues } from "@/data/values";

const brandPromises = [
  {
    number: "01",
    title: "Volledige, persoonlijke en energieke aandacht",
    description: "Jij staat centraal, altijd.",
  },
  {
    number: "02",
    title: "100% inzet, data-gedreven",
    description: "We werken hard én slim, met cijfers als kompas.",
  },
  {
    number: "03",
    title: "Eén aanspreekpunt voor al je diensten",
    description: "Heldere communicatie, geen gedoe en geen ruis.",
  },
];

export default function OnsVerhaal() {
  return (
    <>
      <SEO
        title="Ons verhaal — Brand & Boost"
        description="Wie we zijn en waar we in geloven: partnerschap, creativiteit en echte groei. Lees de missie, visie en kernwaarden van Brand & Boost."
        path="/ons-verhaal"
      />

      <PageHero
        eyebrow="Ons verhaal"
        title="Partnerschap, creativiteit en groei."
        intro="Wie we zijn, waar we in geloven en voor wie we het doen."
      />

      {/* ===== Over ons ===== */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-h2">Over ons</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-lead text-muted-foreground">
              Brand &amp; Boost is een marketingpartner voor ondernemers die houden van hun vak. Wij geloven niet in
              grote bureaus die afrekenen per uur en je daarna laten zwemmen. Wij geloven in partnerschap, creativiteit
              en groei, en werken het liefst met mensen die net als wij energie krijgen van vooruitgang.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ===== Missie & Visie ===== */}
      <Section className="bg-white">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full p-8">
              <h2 className="text-h3 font-heading">Missie</h2>
              <p className="mt-4 text-muted-foreground">
                Ondernemers volledige, persoonlijke en energieke aandacht geven, zodat marketing geen bron van stress
                is, maar een motor voor groei. We hoeven niet het grootste of sterkste bureau te zijn. We willen het
                stabielste en het meest energieke zijn: een team dat doet waar het energie van krijgt, en klanten die
                het oprecht leuk vinden om met ons samen te werken.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <Card className="h-full p-8">
              <h2 className="text-h3 font-heading">Visie</h2>
              <p className="mt-4 text-muted-foreground">
                Marketing draait om partnerschap, niet om facturen. Grote bureaus die afrekenen per uur en je daarna
                alleen laten. Daar geloven we niet in. Wij staan voor creativiteit, betrokkenheid en echte groei. Op
                ieder potje past een dekseltje, een aanpak waarin merk &amp; mens samen groeien.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* ===== Kernwaarden ===== */}
      <Section>
        <SectionHeading eyebrow="Kernwaarden" title="Waar we voor staan." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, index) => (
            <Reveal key={value.number} delay={(index % 4) * 80}>
              <NumberedCard number={value.number} title={value.title} description={value.description} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===== Merkbelofte ===== */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Merkbelofte" title="Dit beloven we je." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brandPromises.map((promise, index) => (
            <Reveal key={promise.number} delay={(index % 3) * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-creme/60 p-6">
                <span aria-hidden="true" className="font-heading text-3xl font-bold text-zonnegeel">
                  {promise.number}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold text-antraciet">{promise.title}</h3>
                <p className="mt-2 text-muted-foreground">{promise.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===== Voor wie we het doen ===== */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-h2">Voor wie we het doen</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-lead text-muted-foreground">
              Wij werken het liefst met ondernemers die houden van hun vak. Niet met mensen die hun bedrijf erbij
              doen, maar met mensen die echt willen ondernemen en groeien. We zoeken sparringpartners met ambitie, het
              liefst in het MKB. En omdat op ieder potje een dekseltje past, denken we graag met iedereen mee.
            </p>
          </Reveal>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
