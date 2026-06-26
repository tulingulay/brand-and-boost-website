import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { Highlight } from "@/components/Highlight";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { ServiceFlipCards } from "@/components/ServiceFlipCards";
import { SEO } from "@/components/SEO";
import { cases } from "@/data/cases";
import { coreValues } from "@/data/values";
import { faqs } from "@/data/faq";
import { reviews } from "@/data/reviews";

export default function Home() {
  const homeFaqs = faqs.slice(0, 4);
  const featuredCases = cases.slice(0, 2);

  return (
    <>
      <SEO
        title="Brand & Boost · Meer dan marketing, een partner in groei."
        description="Partner in groei voor ambitieuze MKB-ondernemers. Geen uurtje-factuurtje, maar partnerschap, creativiteit en echte groei. Plan een strategiegesprek met Brand & Boost."
        path="/"
      />

      {/* ===== Hero (asymmetrisch, magazine) ===== */}
      <section className="bg-creme">
        <div className="container pt-28 pb-section sm:pt-36">
          <Reveal>
            <h1 className="max-w-[18ch] text-display font-bold text-antraciet">
              Meer dan marketing, een partner in <Highlight variant="underline">groei.</Highlight>
            </h1>
          </Reveal>

          <div className="mt-12 grid grid-cols-12 gap-x-8 gap-y-10">
            <Reveal className="col-span-12 lg:col-span-7" delay={120}>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
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
              <div className="border-t-2 border-kobalt pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-antraciet/50">Onze filosofie</p>
                <p className="mt-3 font-heading text-2xl font-semibold leading-tight text-antraciet sm:text-[1.7rem]">
                  Jij de business, wij de boost.
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
              <h2 className="text-h2 text-antraciet">
                Een marketingpartner die met je <Highlight color="zonnegeel">meegroeit.</Highlight>
              </h2>
            </Reveal>
            <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7" delay={120}>
              <p className="text-lead text-muted-foreground">
                Brand &amp; Boost is een partner in groei voor ondernemers die houden van hun vak. Geen groot bureau dat
                afrekent per uur en je daarna laat zwemmen, maar partnerschap, creativiteit en groei, met mensen die net
                als wij energie krijgen van vooruitgang.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
                <Button asChild variant="link" className="h-auto px-0 text-base text-antraciet">
                  <Link to="/ons-verhaal">
                    Lees ons verhaal
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="link" className="h-auto px-0 text-base text-antraciet">
                  <Link to="/proces">
                    Bekijk ons proces
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
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
              <h2 className="text-h2 text-creme">
                Diensten die je merk laten groeien.
              </h2>
            </Reveal>
          </div>

          <div className="mt-12">
            <ServiceFlipCards />
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
              <h2 className="text-h2 text-antraciet">Waar je ons aan herkent.</h2>
              <p className="mt-6 max-w-md font-heading text-xl font-semibold leading-snug text-kobalt">
                Wij hoeven niet de grootste te zijn. Wél de stabielste en meest betrokken.
              </p>
            </Reveal>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
                {coreValues.map((value, index) => (
                  <Reveal key={value.title} delay={(index % 2) * 100}>
                    <div className="border-t-2 border-antraciet/15 pt-5">
                      <h3 className="font-heading text-xl font-bold text-antraciet">{value.title}</h3>
                      <p className="mt-2 text-muted-foreground">{value.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 04 — Portfolio ===== */}
      <section className="bg-creme">
        <div className="container py-section">
          <div className="grid grid-cols-12 gap-x-8 gap-y-6">
            <Reveal className="col-span-12 lg:col-span-7">
              <SectionLabel index="04">Portfolio</SectionLabel>
              <h2 className="text-h2 text-antraciet">Bewijs boven beloftes.</h2>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {featuredCases.map((item, index) => (
              <Reveal key={item.id} delay={(index % 2) * 100}>
                <Link to="/portfolio" className="group/case block">
                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[3px] border border-antraciet/15 bg-white p-8 transition-colors duration-300 group-hover/case:border-kobalt">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.title}
                        loading="lazy"
                        className="max-h-28 w-auto max-w-[70%] object-contain transition-transform duration-500 group-hover/case:scale-[1.04] sm:max-h-32"
                      />
                    ) : (
                      <span className="text-center font-heading text-3xl font-bold text-antraciet">{item.title}</span>
                    )}
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-kobalt">{item.client}</p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-antraciet">{item.title}</h3>
                  <p className="mt-2 max-w-md text-muted-foreground">{item.challenge}</p>
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

      {/* ===== 05 — Reviews (zonnegeel vlak) ===== */}
      <section className="bg-zonnegeel text-antraciet">
        <div className="container py-section">
          <div className="grid grid-cols-12 gap-x-8 gap-y-8">
            <Reveal className="col-span-12 lg:col-span-3">
              <SectionLabel index="05">Reviews</SectionLabel>
            </Reveal>
            <Reveal className="col-span-12 lg:col-span-8 lg:col-start-4" delay={120}>
              <span aria-hidden="true" className="font-heading text-index font-bold leading-[0.5] text-kobalt">
                &ldquo;
              </span>
              <blockquote className="mt-2 font-heading text-h2 font-semibold leading-[1.1] text-antraciet">
                {reviews[0].quote}
                <span aria-hidden="true" className="text-kobalt">&rdquo;</span>
              </blockquote>
              <figcaption className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-antraciet/55">
                {reviews[0].name} · {reviews[0].company}
              </figcaption>
              <Button asChild variant="link" className="mt-7 h-auto px-0 text-base text-antraciet">
                <Link to="/portfolio">
                  Lees meer reviews
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== 06 — Veelgestelde vragen (wit vlak) ===== */}
      <section className="bg-white">
        <div className="container py-section">
          <div className="grid grid-cols-12 gap-x-8 gap-y-10">
            <Reveal className="col-span-12 lg:col-span-4">
              <SectionLabel index="06">Veelgestelde vragen</SectionLabel>
              <h2 className="text-h2 text-antraciet">Goed om te weten.</h2>
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
