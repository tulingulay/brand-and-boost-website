import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { AandachtIcon, ContactIcon, DataIcon, MissieIcon, VisieIcon } from "@/components/BrandIcons";
import { CTASection } from "@/components/CTASection";
import { DecoDots } from "@/components/Decorations";
import { Eyebrow } from "@/components/Eyebrow";
import { FeatureCard } from "@/components/FeatureCard";
import { Highlight } from "@/components/Highlight";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { StatementBox } from "@/components/StatementBox";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WaveDivider } from "@/components/WaveDivider";
import { processSteps } from "@/data/process";
import { coreValues } from "@/data/values";
import { cn } from "@/lib/utils";

const teaserAccents = [
  { badge: "bg-kobalt text-white", text: "text-kobalt" },
  { badge: "bg-zonnegeel text-antraciet", text: "text-[#9a7209]" },
  { badge: "bg-kastanje text-white", text: "text-kastanje" },
  { badge: "bg-kobalt text-white", text: "text-kobalt" },
];

const brandPromises = [
  {
    icon: AandachtIcon,
    accent: "zonnegeel" as const,
    title: "Volledige, persoonlijke en energieke aandacht",
    description: "Jij staat centraal, altijd.",
  },
  {
    icon: DataIcon,
    accent: "kobalt" as const,
    title: "100% inzet, data-gedreven",
    description: "We werken hard én slim, met cijfers als kompas.",
  },
  {
    icon: ContactIcon,
    accent: "kastanje" as const,
    title: "Eén aanspreekpunt voor al je diensten",
    description: "Heldere communicatie, geen gedoe en geen ruis.",
  },
];

export default function OnsVerhaal() {
  return (
    <>
      <SEO
        title="Ons verhaal · Brand & Boost"
        description="Wie we zijn en waar we in geloven: partnerschap, creativiteit en echte groei. Lees de missie, visie en kernwaarden van Brand & Boost."
        path="/ons-verhaal"
      />

      <PageHero
        eyebrow="Ons verhaal"
        title={
          <>
            Partnerschap, creativiteit en <Highlight variant="underline">groei</Highlight>.
          </>
        }
        intro="Wie we zijn, waar we in geloven en voor wie we het doen."
      />

      {/* ===== Over ons ===== */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <Reveal direction="left">
            <Eyebrow>Over ons</Eyebrow>
            <h2 className="mt-4 text-h2">
              Een marketingpartner die met je <Highlight color="zonnegeel">meegroeit.</Highlight>
            </h2>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <p className="text-lead text-muted-foreground">
              Brand &amp; Boost is een marketingpartner voor ondernemers die houden van hun vak. Wij geloven niet in
              grote bureaus die afrekenen per uur en je daarna laten zwemmen. Wij geloven in partnerschap, creativiteit
              en groei, en werken het liefst met mensen die net als wij energie krijgen van vooruitgang.
            </p>
          </Reveal>
        </div>
      </Section>

      <WaveDivider topClass="bg-creme" fillClass="fill-white" accent />

      {/* ===== Aanpak (teaser) ===== */}
      <Section
        className="bg-white"
        decoration={<DecoDots className="absolute right-8 top-12 hidden text-kastanje/10 lg:block" />}
      >
        <SectionHeading
          align="center"
          eyebrow="Onze aanpak"
          title={
            <>
              In vier stappen naar <Highlight>groei</Highlight>.
            </>
          }
          intro="Geen losse acties, maar een heldere route. Zo pakken we het samen aan, met jou steeds aan het stuur."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const accent = teaserAccents[index];
            return (
              <Reveal key={step.number} delay={(index % 4) * 80}>
                <div className="h-full rounded-2xl border-2 border-kastanje/25 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-kastanje/50 hover:shadow-soft-lg">
                  <span
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-2xl font-heading text-lg font-bold shadow-soft",
                      accent.badge,
                    )}
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-antraciet">{step.title}</h3>
                  <p className={cn("mt-1 text-sm font-semibold", accent.text)}>{step.subtitle}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-10 text-center">
          <Button asChild variant="link" className="h-auto px-0 text-base">
            <Link to="/proces">
              Bekijk het volledige proces
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      {/* ===== Missie & Visie ===== */}
      <Section
        className="bg-white"
        decoration={<DecoDots className="absolute left-8 top-12 hidden text-kobalt/10 lg:block" />}
      >
        <SectionHeading align="center" eyebrow="Missie & visie" title="Dit drijft ons." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal direction="left">
            <Card className="group relative h-full overflow-hidden p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg sm:p-10">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-kobalt" />
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-kobalt/10 text-kobalt transition-transform duration-300 group-hover:-rotate-6">
                <MissieIcon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-heading text-h3 font-bold text-antraciet">Missie</h3>
              <p className="mt-3 text-muted-foreground">
                Ondernemers volledige, persoonlijke en energieke aandacht geven, zodat marketing geen bron van stress
                is, maar een motor voor groei. We hoeven niet het grootste of sterkste bureau te zijn. We willen het
                stabielste en het meest energieke zijn: een team dat doet waar het energie van krijgt, en klanten die
                het oprecht leuk vinden om met ons samen te werken.
              </p>
            </Card>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <Card className="group relative h-full overflow-hidden p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg sm:p-10">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-zonnegeel" />
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-zonnegeel/20 text-kobalt transition-transform duration-300 group-hover:-rotate-6">
                <VisieIcon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-heading text-h3 font-bold text-antraciet">Visie</h3>
              <p className="mt-3 text-muted-foreground">
                Marketing draait om partnerschap, niet om facturen. Grote bureaus die afrekenen per uur en je daarna
                alleen laten. Daar geloven we niet in. Wij staan voor creativiteit, betrokkenheid en echte groei. Op
                ieder potje past een dekseltje, een aanpak waarin merk &amp; mens samen groeien.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <WaveDivider topClass="bg-white" fillClass="fill-creme" flip accent />

      {/* ===== Statement / CTA ===== */}
      <Section>
        <Reveal>
          <StatementBox
            className="lg:max-w-3xl"
            label="Kort gezegd"
            cta={{ label: "Plan een strategiegesprek", to: "/contact" }}
          >
            Geen uurtje-factuurtje. Wél een partner die naast je staat en met je meegroeit.
          </StatementBox>
        </Reveal>
      </Section>

      {/* ===== Kernwaarden ===== */}
      <Section>
        <SectionHeading eyebrow="Kernwaarden" title="Waar we voor staan." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, index) => (
            <Reveal key={value.title} delay={(index % 4) * 80}>
              <FeatureCard
                icon={value.icon}
                title={value.title}
                description={value.description}
                accent={value.accent}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <WaveDivider topClass="bg-creme" fillClass="fill-white" accent />

      {/* ===== Merkbelofte ===== */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Merkbelofte" title="Dit beloven we je." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brandPromises.map((promise, index) => (
            <Reveal key={promise.title} delay={(index % 3) * 80}>
              <FeatureCard
                icon={promise.icon}
                title={promise.title}
                description={promise.description}
                accent={promise.accent}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <WaveDivider topClass="bg-white" fillClass="fill-creme" flip accent />

      {/* ===== Voor wie we het doen ===== */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <Reveal direction="left">
            <Eyebrow>Voor wie</Eyebrow>
            <h2 className="mt-4 text-h2">Voor wie we het doen.</h2>
          </Reveal>
          <Reveal direction="right" delay={120}>
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
