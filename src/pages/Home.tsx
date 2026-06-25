import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { CaseCard } from "@/components/CaseCard";
import { DecoDots, DecoRings } from "@/components/Decorations";
import { FeatureCard } from "@/components/FeatureCard";
import { HeroIconBackground } from "@/components/HeroIconBackground";
import { Highlight } from "@/components/Highlight";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { ServiceCard } from "@/components/ServiceCard";
import { StatementBox } from "@/components/StatementBox";
import { WaveDivider, WAVE_PATH, WAVE_TOP } from "@/components/WaveDivider";
import { cases } from "@/data/cases";
import { coreValues } from "@/data/values";
import { faqs } from "@/data/faq";
import { services } from "@/data/services";

export default function Home() {
  const homeFaqs = faqs.slice(0, 3);
  const featuredCases = cases.slice(0, 2);

  return (
    <>
      <SEO
        title="Brand & Boost · Meer dan marketing, een partner in groei."
        description="Marketingpartner voor ambitieuze MKB-ondernemers. Geen uurtje-factuurtje, maar partnerschap, creativiteit en echte groei. Plan een strategiegesprek met Brand & Boost."
        path="/"
      />

      {/* ===== Hero (full-bleed, gecentreerd) ===== */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-b from-kobalt to-[#0e5990]">
        {/* Subtiele decoratieve glows voor diepte */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-zonnegeel/15 blur-3xl"
        />

        {/* Marketing-iconen subtiel in de achtergrond */}
        <HeroIconBackground />

        <Reveal className="container relative z-10 py-24 text-center sm:py-28 lg:py-32">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-zonnegeel" />
            Marketingbureau voor ambitieuze MKB-ondernemers
          </p>
          <h1 className="mx-auto max-w-4xl text-display text-white">
            Meer dan marketing, een partner in{" "}
            <Highlight variant="underline">groei.</Highlight>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lead text-white">
            Geen uurtje-factuurtje, maar een partner die naast je staat en met je meegroeit.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="group bg-white text-primary shadow-soft hover:bg-creme">
              <Link to="/contact">
                Plan een strategiegesprek
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-antraciet"
            >
              <Link to="/diensten">Bekijk onze diensten</Link>
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2.5">
            {["Eén aanspreekpunt", "Data-gedreven", "Persoonlijke aandacht"].map((item) => (
              <li key={item} className="inline-flex items-center gap-2 text-sm font-medium text-white/90">
                <Check className="h-4 w-4 shrink-0 text-zonnegeel" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Golvende overgang naar de creme sectie eronder */}
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-[1] h-10 w-full fill-creme sm:h-14 lg:h-16"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          focusable="false"
        >
          <path d={WAVE_PATH} />
          <path
            d={WAVE_TOP}
            className="fill-none stroke-kastanje"
            strokeWidth={3}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </section>

      {/* ===== Korte intro (Over ons, ingekort) ===== */}
      <Section
        className="overflow-hidden"
        decoration={
          <>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 top-8 h-64 w-64 rounded-full bg-zonnegeel/10 blur-3xl"
            />
            <DecoDots className="absolute bottom-10 right-8 hidden text-kobalt/15 lg:block" />
          </>
        }
      >
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal direction="left" className="lg:col-span-7">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Over ons</p>
            <h2 className="text-h2">
              Een marketingpartner die met je <Highlight color="zonnegeel">meegroeit.</Highlight>
            </h2>
            <p className="mt-6 text-lead text-muted-foreground">
              Brand &amp; Boost is een marketingpartner voor ondernemers die houden van hun vak. Geen groot bureau dat
              afrekent per uur en je daarna laat zwemmen, maar partnerschap, creativiteit en groei, met mensen die
              net als wij energie krijgen van vooruitgang.
            </p>
            <Button asChild variant="link" className="mt-4 h-auto px-0 text-base">
              <Link to="/ons-verhaal">
                Lees ons verhaal
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
          <Reveal direction="right" delay={120} className="lg:col-span-5 lg:mt-12">
            <StatementBox label="Onze filosofie" rotate>
              Op ieder potje past een dekseltje.
            </StatementBox>
          </Reveal>
        </div>
      </Section>

      <WaveDivider topClass="bg-creme" fillClass="fill-primary" accent />

      {/* ===== Diensten in het kort ===== */}
      <Section
        className="bg-primary"
        decoration={<DecoDots className="absolute right-8 top-10 text-white/10" />}
      >
        <SectionHeading
          light
          eyebrow="Wat we doen"
          title={
            <>
              Diensten die je merk laten <Highlight color="zonnegeel">groeien</Highlight>.
            </>
          }
          intro="Van branding tot vindbaarheid: alles onder één dak, met één aanspreekpunt."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
          <Reveal delay={160}>
            <StatementBox compact label="Zo fijn">
              Zeven diensten, één team dat je kent.
            </StatementBox>
          </Reveal>
        </div>
        <Reveal className="mt-10">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
          >
            <Link to="/diensten">
              Bekijk alle diensten
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      <WaveDivider topClass="bg-primary" fillClass="fill-creme" flip accent />

      {/* ===== Waarom Brand & Boost / kernwaarden ===== */}
      <Section
        decoration={
          <DecoRings className="absolute -right-10 top-12 hidden h-48 w-48 text-zonnegeel/20 lg:block" />
        }
      >
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.35fr] lg:items-start lg:gap-14">
          <div>
            <SectionHeading eyebrow="Waarom Brand & Boost" title="Vier waarden waar je ons aan herkent." />
            <Reveal className="mt-8" delay={120}>
              <StatementBox label="Beloofd">
                We hoeven niet de grootste te zijn. Wél de stabielste en meest betrokken.
              </StatementBox>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {coreValues.map((value, index) => (
              <Reveal key={value.title} delay={(index % 2) * 100}>
                <FeatureCard
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  accent={value.accent}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <WaveDivider topClass="bg-creme" fillClass="fill-primary" accent />

      {/* ===== Proces in het kort ===== */}
      <Section className="bg-primary">
        <SectionHeading
          light
          eyebrow="Zo werken we"
          title="Van kennismaking tot groei, in vier stappen."
        />
        <ProcessSteps />
        <Reveal className="mt-10">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
          >
            <Link to="/proces">
              Bekijk ons proces
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      <WaveDivider topClass="bg-primary" fillClass="fill-creme" flip accent />

      {/* ===== Portfolio / resultaten teaser ===== */}
      <Section
        decoration={<DecoDots className="absolute left-6 top-10 hidden text-kastanje/15 lg:block" />}
      >
        <SectionHeading eyebrow="Portfolio" title="Bewijs boven beloftes." intro="Een greep uit het werk waar we samen met ondernemers aan bouwen." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {featuredCases.map((item, index) => (
            <Reveal key={item.id} delay={(index % 2) * 80}>
              <CaseCard item={item} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Button asChild size="lg" variant="outline">
            <Link to="/portfolio">
              Bekijk het portfolio
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      <WaveDivider topClass="bg-creme" fillClass="fill-white" accent />

      {/* ===== Korte FAQ ===== */}
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
          <SectionHeading
            eyebrow="Veelgestelde vragen"
            title="Goed om te weten."
            intro="Nog meer vragen? Je vindt het complete overzicht op de FAQ-pagina."
          />
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {homeFaqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Button asChild variant="link" className="mt-2 h-auto px-0 text-base">
              <Link to="/faq">
                Naar alle vragen
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </Section>

      <WaveDivider topClass="bg-white" fillClass="fill-creme" flip accent />

      {/* ===== Afsluitende CTA ===== */}
      <CTASection />
    </>
  );
}
