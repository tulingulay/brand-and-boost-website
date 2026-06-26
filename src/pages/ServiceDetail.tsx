import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { PortfolioFlipCard } from "@/components/PortfolioFlipCards";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionLabel } from "@/components/SectionLabel";
import { SEO } from "@/components/SEO";
import { ServiceIndex } from "@/components/ServiceIndex";
import { Button } from "@/components/ui/button";
import { cases } from "@/data/cases";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  // Onbekende dienst → terug naar het overzicht.
  if (!service) {
    return <Navigate to="/diensten" replace />;
  }

  const others = services.filter((s) => s.slug !== service.slug);
  // Portfolio-cases die als voorbeeld bij deze dienst horen (in de opgegeven volgorde).
  const serviceCases = (service.caseIds ?? [])
    .map((id) => cases.find((c) => c.id === id))
    .filter((c): c is (typeof cases)[number] => Boolean(c));

  return (
    <>
      <SEO
        title={`${service.title} · Brand & Boost`}
        description={`${service.description} Lees meer over ${service.title.toLowerCase()} bij Brand & Boost.`}
        path={`/diensten/${service.slug}`}
      />

      {/* ===== Editorial header met dienstfoto ===== */}
      <section className="bg-creme">
        <div className="container pt-28 pb-section-sm sm:pt-36">
          <Reveal>
            <Link
              to="/diensten"
              className="group/back inline-flex items-center gap-2 text-sm font-semibold text-antraciet/70 transition-colors hover:text-antraciet"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform group-hover/back:-translate-x-0.5"
                aria-hidden="true"
              />
              Alle diensten
            </Link>
          </Reveal>

          <div className="mt-10 grid grid-cols-12 items-end gap-x-8 gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <Reveal>
                <SectionLabel>Dienst</SectionLabel>
              </Reveal>
              <Reveal delay={90}>
                <h1 className="text-display font-bold text-antraciet">{service.title}</h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lead text-muted-foreground">{service.description}</p>
                <Button asChild size="lg" className="mt-9">
                  <Link to="/contact">
                    Plan een strategiegesprek
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </Reveal>
            </div>

            <Reveal className="col-span-12 lg:col-span-4 lg:col-start-9" delay={200}>
              <div className="overflow-hidden border border-antraciet/15">
                <img src={service.image} alt="" className="aspect-[4/5] w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== 01 — Inhoud ===== */}
      <Section className="bg-creme">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          <Reveal className="col-span-12 lg:col-span-7">
            <SectionLabel index="01">Wat wij voor je doen</SectionLabel>
            <p className="mt-6 text-lead text-muted-foreground">{service.intro}</p>
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-4 lg:col-start-9" delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-antraciet/50">Dit houdt het in</p>
            <ul className="mt-5 border-t border-antraciet/15">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-antraciet/15 py-4 text-sm text-antraciet/80"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-kobalt" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ===== Praktijkvoorbeeld(en) uit het portfolio ===== */}
      {serviceCases.length > 0 && (
        <Section className="bg-white">
          <SectionLabel>Praktijk</SectionLabel>
          <h2 className="max-w-2xl text-h2 text-antraciet">
            {serviceCases.length > 1 ? "Voorbeelden uit de praktijk." : "Een voorbeeld uit de praktijk."}
          </h2>

          <ol className="mt-12 space-y-16 sm:mt-16 sm:space-y-24">
            {serviceCases.map((item, index) => (
              <li key={item.id}>
                <Reveal>
                  <article className="grid grid-cols-12 items-start gap-x-8 gap-y-6">
                    <div className={cn("col-span-12 lg:col-span-6", index % 2 === 1 && "lg:order-2 lg:col-start-7")}>
                      <PortfolioFlipCard item={item} />
                    </div>
                    <div className={cn("col-span-12 lg:col-span-5", index % 2 === 1 ? "lg:order-1" : "lg:col-start-8")}>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kobalt">{item.client}</p>
                      <h3 className="mt-3 font-heading text-2xl font-bold text-antraciet sm:text-3xl">{item.title}</h3>

                      <div className="mt-6 space-y-5">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-antraciet/45">De vraag</p>
                          <p className="mt-1.5 text-muted-foreground">{item.challenge}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-antraciet/45">
                            Onze boost
                          </p>
                          <p className="mt-1.5 text-muted-foreground">{item.approach}</p>
                        </div>
                        <div className="border-t-2 border-zonnegeel pt-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-antraciet/45">
                            Het resultaat
                          </p>
                          <p className="mt-1.5 font-heading text-lg font-semibold text-kobalt">{item.result}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal className="mt-12">
            <Button asChild variant="link" className="h-auto px-0 text-base text-antraciet">
              <Link to="/portfolio">
                Bekijk het volledige portfolio
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </Section>
      )}

      {/* ===== 02 — Andere diensten (kobalt vlak) ===== */}
      <Section className="bg-kobalt text-creme">
        <SectionLabel index="02" light>
          Diensten
        </SectionLabel>
        <h2 className="max-w-2xl text-h2 text-creme">Ontdek onze andere diensten.</h2>
        <div className="mt-12">
          <ServiceIndex services={others} light />
        </div>
      </Section>

      <CTASection
        title="Benieuwd wat dit voor jou kan betekenen?"
        text="In een vrijblijvend strategiegesprek kijken wij samen hoe deze dienst bij jouw merk past."
      />
    </>
  );
}
