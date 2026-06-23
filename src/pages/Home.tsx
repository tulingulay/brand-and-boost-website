import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { CaseCard } from "@/components/CaseCard";
import { NumberedCard } from "@/components/NumberedCard";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { ServiceCard } from "@/components/ServiceCard";
import { cases } from "@/data/cases";
import { coreValues } from "@/data/values";
import { faqs } from "@/data/faq";
import { processSteps } from "@/data/process";
import { services } from "@/data/services";

export default function Home() {
  const homeFaqs = faqs.slice(0, 3);
  const featuredCases = cases.slice(0, 2);

  return (
    <>
      <SEO
        title="Brand & Boost — Meer dan marketing, een partner in groei."
        description="Marketingpartner voor ambitieuze MKB-ondernemers. Geen uurtje-factuurtje, maar partnerschap, creativiteit en echte groei. Plan een gesprek met Brand & Boost."
        path="/"
      />

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-creme">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-kobalt/10 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-zonnegeel/10 blur-3xl"
        />
        <div className="container relative grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-28">
          <Reveal>
            <p className="mb-4 inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
              Marketingbureau voor ambitieuze MKB-ondernemers
            </p>
            <h1 className="text-display">
              Meer dan marketing, <span className="text-kobalt">een partner in groei.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lead text-muted-foreground">
              Geen uurtje-factuurtje, maar een partner die naast je staat en met je meegroeit.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Plan een gesprek
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/diensten">Bekijk onze diensten</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:justify-self-end">
            {/* TODO: vervang /public/hero-illustration.svg door definitief
                hero-beeld of -illustratie. Geef bij een betekenisvol beeld een
                beschrijvende alt-tekst (nu leeg omdat het decoratief is). */}
            <img
              src="/hero-illustration.svg"
              alt=""
              width={560}
              height={460}
              className="mx-auto w-full max-w-md drop-shadow-[0_24px_48px_rgba(45,45,45,0.12)] lg:max-w-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* ===== Korte intro (Over ons, ingekort) ===== */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Over ons</p>
            <h2 className="text-h2">Een marketingpartner die met je meegroeit.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-lead text-muted-foreground">
              Brand &amp; Boost is een marketingpartner voor ondernemers die houden van hun vak. Geen groot bureau dat
              afrekent per uur en je daarna laat zwemmen — wel partnerschap, creativiteit en groei, met mensen die
              net als wij energie krijgen van vooruitgang.
            </p>
            <Button asChild variant="link" className="mt-4 h-auto px-0 text-base">
              <Link to="/ons-verhaal">
                Lees ons verhaal
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* ===== Diensten in het kort ===== */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="Wat we doen"
          title="Diensten die je merk laten groeien."
          intro="Van branding tot vindbaarheid: alles onder één dak, met één aanspreekpunt."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Button asChild size="lg" variant="outline">
            <Link to="/diensten">
              Bekijk alle diensten
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      {/* ===== Waarom Brand & Boost / kernwaarden ===== */}
      <Section>
        <SectionHeading
          eyebrow="Waarom Brand & Boost"
          title="Vier waarden waar je ons aan herkent."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, index) => (
            <Reveal key={value.number} delay={(index % 4) * 80}>
              <NumberedCard number={value.number} title={value.title} description={value.description} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===== Proces in het kort ===== */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="Zo werken we"
          title="Van kennismaking tot groei, in vier stappen."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={(index % 4) * 80} className="h-full">
              <li className="relative h-full">
                <span aria-hidden="true" className="font-heading text-4xl font-bold text-kobalt/70">
                  {step.number}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold text-antraciet">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-10">
          <Button asChild size="lg" variant="outline">
            <Link to="/proces">
              Bekijk ons proces
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      {/* ===== Portfolio / resultaten teaser ===== */}
      <Section>
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

      {/* ===== Afsluitende CTA ===== */}
      <CTASection />
    </>
  );
}
