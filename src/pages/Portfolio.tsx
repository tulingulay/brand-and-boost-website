import { CaseStory } from "@/components/CaseStory";
import { CTASection } from "@/components/CTASection";
import { Highlight } from "@/components/Highlight";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { cases } from "@/data/cases";
import { reviews } from "@/data/reviews";
import { cn } from "@/lib/utils";

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio · Brand & Boost"
        description="Cases en reviews van Brand & Boost. Bekijk het werk dat wij samen met ambitieuze MKB-ondernemers maken en wat zij over de samenwerking zeggen."
        path="/portfolio"
      />

      <PageHero
        title={
          <>
            Werk waar wij <Highlight variant="underline">trots</Highlight> op zijn.
          </>
        }
        intro="Cases, resultaten en de woorden van ondernemers met wie wij samenwerken."
      />

      {/* ===== Cases (flip-card + vraag/boost/resultaat) ===== */}
      <Section className="bg-creme">
        <h2 className="max-w-2xl text-h2 text-antraciet">Een greep uit ons werk.</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Hover over een logo en het werk dat wij voor deze ondernemers maakten komt tevoorschijn.
        </p>

        <ol className="mt-14 space-y-16 sm:mt-20 sm:space-y-24">
          {cases.map((item, index) => (
            <li key={item.id}>
              <CaseStory item={item} index={index} />
            </li>
          ))}
        </ol>
      </Section>

      {/* ===== Reviews (zonnegeel vlak, pull-quotes) ===== */}
      <Section className="bg-zonnegeel text-antraciet">
        <h2 className="max-w-2xl text-h2 text-antraciet">Wat klanten over ons zeggen.</h2>

        <div className="mt-12 border-t border-antraciet/15">
          {reviews.map((review, index) => (
            <Reveal key={index}>
              <figure
                className={cn(
                  "grid grid-cols-12 gap-x-6 gap-y-3 py-10 sm:py-14",
                  index < reviews.length - 1 && "border-b border-antraciet/15",
                )}
              >
                <span
                  aria-hidden="true"
                  className="col-span-12 font-heading text-index font-bold leading-[0.6] text-kobalt lg:col-span-2"
                >
                  &ldquo;
                </span>
                <div className="col-span-12 lg:col-span-9 lg:col-start-3">
                  <blockquote className="font-heading text-2xl font-semibold leading-snug text-antraciet sm:text-[2rem]">
                    {review.quote}
                    <span aria-hidden="true" className="text-kobalt">&rdquo;</span>
                  </blockquote>
                  <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-antraciet/70">
                    {review.name} · {review.company}
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
