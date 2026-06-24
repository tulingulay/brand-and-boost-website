import { CTASection } from "@/components/CTASection";
import { CaseCard } from "@/components/CaseCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ReviewCard } from "@/components/ReviewCard";
import { Section, SectionHeading } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { StatementBox } from "@/components/StatementBox";
import { cases } from "@/data/cases";
import { reviews } from "@/data/reviews";

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio · Brand & Boost"
        description="Cases en reviews van Brand & Boost. Bekijk het werk dat we samen met ambitieuze MKB-ondernemers maken en wat zij over de samenwerking zeggen."
        path="/portfolio"
      />

      <PageHero
        eyebrow="Portfolio"
        title="Werk waar we trots op zijn."
        intro="Cases, resultaten en de woorden van ondernemers met wie we samenwerken."
      />

      {/* ===== Cases ===== */}
      <Section>
        <SectionHeading eyebrow="Cases" title="Een greep uit ons werk." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 80}>
              <CaseCard item={item} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===== Statement / CTA ===== */}
      <Section>
        <Reveal>
          <StatementBox
            className="lg:ml-auto lg:max-w-3xl"
            rotate
            label="Jouw merk als volgende?"
            cta={{ label: "Plan een strategiegesprek", to: "/contact" }}
          >
            Laten we kennismaken en kijken hoe we jouw merk laten groeien.
          </StatementBox>
        </Reveal>
      </Section>

      {/* ===== Reviews ===== */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Reviews" title="Wat klanten over ons zeggen." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={index} delay={(index % 3) * 80}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
