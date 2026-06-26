import { CTASection } from "@/components/CTASection";
import { Highlight } from "@/components/Highlight";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionLabel } from "@/components/SectionLabel";
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
        eyebrow="Portfolio"
        title={
          <>
            Werk waar wij <Highlight variant="underline">trots</Highlight> op zijn.
          </>
        }
        intro="Cases, resultaten en de woorden van ondernemers met wie wij samenwerken."
      />

      {/* ===== 01 — Cases ===== */}
      <Section className="bg-creme">
        <SectionLabel index="01">Cases</SectionLabel>
        <h2 className="mt-6 max-w-2xl text-h2 text-antraciet">Een greep uit ons werk.</h2>

        <ol className="mt-14 space-y-16 sm:mt-20 sm:space-y-24">
          {cases.map((item, index) => (
            <li key={item.id}>
              <Reveal>
                <article className="grid grid-cols-12 items-start gap-x-8 gap-y-6">
                  <div className={cn("col-span-12 lg:col-span-6", index % 2 === 1 && "lg:order-2 lg:col-start-7")}>
                    <div className="overflow-hidden border border-antraciet/15">
                      <img src={item.image} alt={item.imageAlt} className="aspect-[16/10] w-full object-cover" />
                    </div>
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
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-antraciet/45">Onze boost</p>
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
      </Section>

      {/* ===== 02 — Reviews (kobalt vlak, pull-quotes) ===== */}
      <Section className="bg-kobalt text-creme">
        <SectionLabel index="02" light>
          Reviews
        </SectionLabel>
        <h2 className="mt-6 max-w-2xl text-h2 text-creme">Wat klanten over ons zeggen.</h2>

        <div className="mt-12 border-t border-creme/20">
          {reviews.map((review, index) => (
            <Reveal key={index}>
              <figure className="grid grid-cols-12 gap-x-6 gap-y-3 border-b border-creme/20 py-12 sm:py-16">
                <span
                  aria-hidden="true"
                  className="col-span-12 font-heading text-index font-bold leading-[0.6] text-zonnegeel lg:col-span-2"
                >
                  &ldquo;
                </span>
                <div className="col-span-12 lg:col-span-9 lg:col-start-3">
                  <blockquote className="font-heading text-2xl font-semibold leading-snug text-creme sm:text-[2rem]">
                    {review.quote}
                  </blockquote>
                  <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-creme/70">
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
