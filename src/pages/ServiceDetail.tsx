import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { serviceIcons } from "@/components/icons";
import { CTASection } from "@/components/CTASection";
import { DecoDots } from "@/components/Decorations";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { WaveDivider, WAVE_PATH, WAVE_TOP } from "@/components/WaveDivider";
import { Section, SectionHeading } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { ServiceCard } from "@/components/ServiceCard";
import { StatementBox } from "@/components/StatementBox";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { services } from "@/data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  // Onbekende dienst → terug naar het overzicht.
  if (!service) {
    return <Navigate to="/diensten" replace />;
  }

  const Icon = serviceIcons[service.icon];
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <SEO
        title={`${service.title} · Brand & Boost`}
        description={`${service.description} Lees meer over ${service.title.toLowerCase()} bij Brand & Boost.`}
        path={`/diensten/${service.slug}`}
      />

      {/* ===== Hero (full-bleed kobalt) ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-kobalt to-[#0e5990]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 left-1/4 h-56 w-56 rounded-full bg-zonnegeel/15 blur-3xl"
        />
        <DecoDots className="absolute right-10 top-10 hidden text-white/10 lg:block" />

        <div className="container relative z-10 py-14 pb-24 sm:py-20 sm:pb-32">
          <Reveal className="max-w-3xl">
            <Link
              to="/diensten"
              className="group mb-6 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              Alle diensten
            </Link>

            <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </span>

            <div className="mb-5">
              <Eyebrow light>Dienst</Eyebrow>
            </div>
            <h1 className="text-h1 text-white">{service.title}</h1>
            <p className="mt-5 text-lead text-white/85">{service.description}</p>

            <div className="mt-8">
              <Button asChild size="lg" className="group bg-white text-primary shadow-soft hover:bg-creme">
                <Link to="/contact">
                  Plan een strategiegesprek
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Golvende overgang naar de creme sectie eronder */}
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-[1] h-8 w-full fill-creme sm:h-12 lg:h-14"
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

      {/* ===== Inhoud ===== */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-h2">Wat we voor je doen</h2>
            <p className="mt-4 text-lead text-muted-foreground">{service.intro}</p>
          </Reveal>
          <Reveal delay={80}>
            <Card className="p-6 sm:p-8">
              <h3 className="font-heading text-h3">Dit houdt het in</h3>
              <ul className="mt-5 space-y-3.5">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zonnegeel/20 text-kobalt">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* ===== Statement / CTA ===== */}
      <Section>
        <Reveal>
          <StatementBox
            className="lg:max-w-3xl"
            rotate
            label="Aan de slag?"
            cta={{ label: "Plan een strategiegesprek", to: "/contact" }}
          >
            Eén gesprek en je weet wat we voor jouw merk kunnen betekenen.
          </StatementBox>
        </Reveal>
      </Section>

      <WaveDivider topClass="bg-creme" fillClass="fill-white" accent />

      {/* ===== Andere diensten ===== */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Diensten" title="Ontdek onze andere diensten." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s, index) => (
            <Reveal key={s.slug} delay={(index % 3) * 80}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </Section>

      <WaveDivider topClass="bg-white" fillClass="fill-creme" flip accent />

      <CTASection
        title="Benieuwd wat dit voor jou kan betekenen?"
        text="In een vrijblijvend strategiegesprek kijken we samen hoe deze dienst bij jouw merk past."
      />
    </>
  );
}
