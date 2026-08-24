import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { CaseStory } from "@/components/CaseStory";
import { CTASection } from "@/components/CTASection";
import { PrimaryCtaButton } from "@/components/PrimaryCta";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { ServiceIndex } from "@/components/ServiceIndex";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { cases } from "@/data/cases";
import { faqCategories } from "@/data/faq";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  // Onbekende dienst → een echte 404-pagina (een redirect zou voor
  // crawlers een 200 op een niet-bestaande URL zijn).
  if (!service) {
    return <NotFound />;
  }

  const others = services.filter((s) => s.slug !== service.slug);
  // FAQ-categorie van deze dienst (daar staan o.a. de prijzen).
  const faqCategory = faqCategories.find((c) => c.serviceSlug === service.slug);
  // Portfolio-cases waarin deze dienst is ingezet (bron: cases.serviceIds).
  const serviceCases = cases.filter((c) => c.serviceIds?.includes(service.slug));

  return (
    <>
      <SEO
        title={`${service.title} · Brand & Boost`}
        description={`${service.description} Lees meer over ${service.title.toLowerCase()} bij Brand & Boost.`}
        path={`/diensten/${service.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Diensten", path: "/diensten" },
          { name: service.title, path: `/diensten/${service.slug}` },
        ]}
      />
      <ServiceJsonLd service={service} />

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
              <Reveal delay={90}>
                <h1 className="text-display font-bold text-antraciet">{service.title}</h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lead text-muted-foreground">{service.description}</p>
                <PrimaryCtaButton className="mt-9" />
              </Reveal>
            </div>

            <Reveal className="col-span-12 lg:col-span-4 lg:col-start-9" delay={200}>
              <div className="overflow-hidden border border-antraciet/15">
                <img
                  src={service.image}
                  alt={`Sfeerbeeld bij de dienst ${service.title.toLowerCase()}`}
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== 01 — Inhoud ===== */}
      <Section className="bg-creme">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          <Reveal className="col-span-12 lg:col-span-7">
            <p className="mt-6 text-lead text-muted-foreground">{service.intro}</p>
            {faqCategory && (
              <Link
                to={`/faq#${faqCategory.id}`}
                className="group/faq mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-[6px] hover:underline"
              >
                Veelgestelde vragen over {service.title.toLowerCase()}, inclusief prijzen
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover/faq:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            )}
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-4 lg:col-start-9" delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-antraciet/70">Dit houdt het in</p>
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
          <h2 className="max-w-2xl text-h2 text-antraciet">
            {serviceCases.length > 1 ? "Voorbeelden uit de praktijk." : "Een voorbeeld uit de praktijk."}
          </h2>

          <ol className="mt-12 space-y-16 sm:mt-16 sm:space-y-24">
            {serviceCases.map((item, index) => (
              <li key={item.id}>
                <CaseStory item={item} index={index} showReview />
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
