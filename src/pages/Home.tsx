import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { Highlight } from "@/components/Highlight";
import { ProcessNumbered } from "@/components/ProcessNumbered";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { ServiceIndex } from "@/components/ServiceIndex";
import { SEO } from "@/components/SEO";
import { cases } from "@/data/cases";
import { coreValues } from "@/data/values";
import { faqs } from "@/data/faq";
import { reviews } from "@/data/reviews";
import { services } from "@/data/services";

export default function Home() {
  const homeFaqs = faqs.slice(0, 4);
  const featuredCases = cases.slice(0, 2);

  return (
    <>
      <SEO
        title="Brand & Boost · Meer dan marketing, een partner in groei."
        description="Marketingpartner voor ambitieuze MKB-ondernemers. Geen uurtje-factuurtje, maar partnerschap, creativiteit en echte groei. Plan een strategiegesprek met Brand & Boost."
        path="/"
      />

      {/* ===== Hero (asymmetrisch, magazine) ===== */}
      <section className="bg-creme">
        <div className="container pt-28 pb-section sm:pt-36">
          <Reveal>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-kastanje" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-antraciet/60">
                Marketingbureau voor ambitieuze MKB-ondernemers
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 max-w-[18ch] text-display font-bold text-antraciet">
              Meer dan marketing, een partner in <Highlight>groei.</Highlight>
            </h1>
          </Reveal>

          <div className="mt-12 grid grid-cols-12 gap-x-8 gap-y-10">
            <Reveal className="col-span-12 lg:col-span-7" delay={120}>
              <p className="max-w-xl text-lead text-muted-foreground">
                Geen uurtje-factuurtje, maar een partner die naast je staat en met je meegroeit. Eén aanspreekpunt,
                data-gedreven, met oprechte aandacht voor jouw merk.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Plan een strategiegesprek
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="link" className="h-auto px-0 text-base text-antraciet">
                  <Link to="/diensten">
                    Bekijk onze diensten
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal className="col-span-12 lg:col-span-4 lg:col-start-9" delay={200}>
              <div className="border-t-2 border-kastanje pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-antraciet/50">Onze filosofie</p>
                <p className="mt-3 font-heading text-2xl font-semibold leading-tight text-antraciet sm:text-[1.7rem]">
                  Op ieder potje past een dekseltje.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== 01 — Over ons ===== */}
      <section className="bg-creme">
        <div className="container pb-section">
          <div className="grid grid-cols-12 gap-x-8 gap-y-8 border-t border-antraciet/15 pt-12 sm:pt-16">
            <Reveal className="col-span-12 lg:col-span-5">
              <SectionLabel index="01">Over ons</SectionLabel>
              <h2 className="mt-6 text-h2 text-antraciet">
                Een marketingpartner die met je <Highlight color="zonnegeel">meegroeit.</Highlight>
              </h2>
            </Reveal>
            <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7" delay={120}>
              <p className="text-lead text-muted-foreground">
                Brand &amp; Boost is een marketingpartner voor ondernemers die houden van hun vak. Geen groot bureau dat
                afrekent per uur en je daarna laat zwemmen, maar partnerschap, creativiteit en groei, met mensen die net
                als wij energie krijgen van vooruitgang.
              </p>
              <Button asChild variant="link" className="mt-6 h-auto px-0 text-base text-antraciet">
                <Link to="/ons-verhaal">
                  Lees ons verhaal
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== 02 — Diensten (kobalt vlak) ===== */}
      <section className="bg-kobalt text-creme">
        <div className="container py-section">
          <div className="grid grid-cols-12 gap-x-8 gap-y-6">
            <Reveal className="col-span-12 lg:col-span-7">
              <SectionLabel index="02" light>
                Diensten
              </SectionLabel>
              <h2 className="mt-6 text-h2 text-creme">
                Diensten die je merk laten <Highlight color="zonnegeel">groeien.</Highlight>
              </h2>
            </Reveal>
            <Reveal className="col-span-12 self-end lg:col-span-4 lg:col-start-9" delay={120}>
              <p className="text-creme/80">
                Van branding tot vindbaarheid: alles onder één dak, met één aanspreekpunt.
              </p>
            </Reveal>
          </div>

          <div className="mt-12">
            <ServiceIndex services={services} light />
          </div>

          <Reveal className="mt-10">
            <Button asChild variant="link" className="h-auto px-0 text-base text-creme">
              <Link to="/diensten">
                Alle diensten bekijken
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ===== 03 — Waarom Brand & Boost ===== */}
      <section className="bg-creme">
        <div className="container py-section">
          <div className="grid grid-cols-12 gap-x-8 gap-y-12">
            <Reveal className="col-span-12 lg:col-span-5">
              <SectionLabel index="03">Waarom Brand &amp; Boost</SectionLabel>
              <h2 className="mt-6 text-h2 text-antraciet">Waar je ons aan herkent.</h2>
              <p className="mt-6 max-w-md font-heading text-xl font-semibold leading-snug text-kastanje">
                We hoeven niet de grootste te zijn. Wél de stabielste en meest betrokken.
              </p>
            </Reveal>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
                {coreValues.map((value, index) => (
                  <Reveal key={value.title} delay={(index % 2) * 100}>
                    <div className="border-t-2 border-antraciet/15 pt-5">
                      <span className="font-heading text-sm font-bold tabular-nums text-kastanje">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 font-heading text-xl font-bold text-antraciet">{value.title}</h3>
                      <p className="mt-2 text-muted-foreground">{value.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 04 — Proces (kastanje vlak) ===== */}
      <section className="bg-kastanje text-creme">
        <div className="container py-section">
          <div className="grid grid-cols-12 gap-x-8 gap-y-6">
            <Reveal className="col-span-12 lg:col-span-7">
              <SectionLabel index="04" light>
                Zo werken we
              </SectionLabel>
              <h2 className="mt-6 text-h2 text-creme">Van kennismaking tot groei, in vier stappen.</h2>
            </Reveal>
          </div>

          <div className="mt-12">
            <ProcessNumbered light />
          </div>

          <Reveal className="mt-10">
            <Button asChild variant="link" className="h-auto px-0 text-base text-creme">
              <Link to="/proces">
                Bekijk ons proces
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ===== 05 — Portfolio ===== */}
      <section className="bg-creme">
        <div className="container py-section">
          <div className="grid grid-cols-12 gap-x-8 gap-y-6">
            <Reveal className="col-span-12 lg:col-span-7">
              <SectionLabel index="05">Portfolio</SectionLabel>
              <h2 className="mt-6 text-h2 text-antraciet">Bewijs boven beloftes.</h2>
            </Reveal>
            <Reveal className="col-span-12 self-end lg:col-span-4 lg:col-start-9" delay={120}>
              <p className="text-muted-foreground">
                Een greep uit het werk waar we samen met ondernemers aan bouwen.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {featuredCases.map((item, index) => (
              <Reveal key={item.id} delay={(index % 2) * 100}>
                <Link to="/portfolio" className="group/case block">
                  <div className="overflow-hidden border border-antraciet/15">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover/case:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-kastanje">{item.client}</p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-antraciet">{item.title}</h3>
                  <p className="mt-2 max-w-md text-muted-foreground">{item.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <Button asChild variant="link" className="h-auto px-0 text-base text-antraciet">
              <Link to="/portfolio">
                Bekijk het portfolio
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ===== 06 — Reviews (kobalt vlak) ===== */}
      <section className="bg-kobalt text-creme">
        <div className="container py-section">
          <div className="grid grid-cols-12 gap-x-8 gap-y-8">
            <Reveal className="col-span-12 lg:col-span-3">
              <SectionLabel index="06" light>
                Reviews
              </SectionLabel>
            </Reveal>
            <Reveal className="col-span-12 lg:col-span-8 lg:col-start-4" delay={120}>
              <span aria-hidden="true" className="font-heading text-index font-bold leading-[0.5] text-zonnegeel">
                &ldquo;
              </span>
              <blockquote className="mt-2 font-heading text-h2 font-semibold leading-[1.1] text-creme">
                {reviews[0].quote}
              </blockquote>
              <figcaption className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-creme/70">
                {reviews[0].name} · {reviews[0].company}
              </figcaption>
              <Button asChild variant="link" className="mt-7 h-auto px-0 text-base text-creme">
                <Link to="/portfolio">
                  Lees meer reviews
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== 07 — Veelgestelde vragen (wit vlak) ===== */}
      <section className="bg-white">
        <div className="container py-section">
          <div className="grid grid-cols-12 gap-x-8 gap-y-10">
            <Reveal className="col-span-12 lg:col-span-4">
              <SectionLabel index="07">Veelgestelde vragen</SectionLabel>
              <h2 className="mt-6 text-h2 text-antraciet">Goed om te weten.</h2>
              <Button asChild variant="link" className="mt-6 h-auto px-0 text-base text-antraciet">
                <Link to="/faq">
                  Naar alle vragen
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>

            <Reveal className="col-span-12 lg:col-span-7 lg:col-start-6">
              <Accordion type="single" collapsible className="w-full">
                {homeFaqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-heading text-lg">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Afsluitende CTA ===== */}
      <CTASection />
    </>
  );
}
