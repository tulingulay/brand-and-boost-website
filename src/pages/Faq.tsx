import { useState, type ReactNode } from "react";
import { ArrowRight, Search, X } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { SEO } from "@/components/SEO";
import { FaqJsonLd } from "@/components/StructuredData";
import { faqCategories, faqs } from "@/data/faq";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const mailHref = `mailto:${site.email}?subject=Mijn vraag aan Brand en Boost`;

export default function Faq() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const q = query.trim().toLowerCase();

  const results = faqCategories
    .map((category, ci) => ({
      category,
      ci,
      items: category.items.filter(
        (item) => !q || `${item.question} ${item.answer}`.toLowerCase().includes(q),
      ),
    }))
    .filter((group) => group.items.length > 0 && (!activeCategory || group.category.title === activeCategory));

  return (
    <>
      <SEO
        title="Veelgestelde vragen · Brand & Boost"
        description="Antwoorden op de meestgestelde vragen over social media beheer, websites, video, branding, SEO, adverteren, drukwerk, onboarding en werken met Brand & Boost."
        path="/faq"
      />
      <FaqJsonLd items={faqs} />

      <section className="bg-creme">
        <div className="container pt-28 pb-section sm:pt-36">
          <Reveal>
            <h1 className="max-w-[15ch] text-display font-bold text-antraciet">Veelgestelde vragen.</h1>
          </Reveal>

          {/* Custom zoekbalk */}
          <Reveal delay={160}>
            <form role="search" onSubmit={(event) => event.preventDefault()} className="group/search mt-8 max-w-2xl">
              <div className="flex items-center gap-3 border-2 border-antraciet/15 bg-white px-5 transition-colors focus-within:border-kobalt">
                <Search className="h-5 w-5 shrink-0 text-antraciet/40" aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Zoek een onderwerp of vraag…"
                  aria-label="Zoek in veelgestelde vragen"
                  className="w-full bg-transparent py-4 font-heading text-lg text-antraciet placeholder:font-sans placeholder:text-base placeholder:font-normal placeholder:text-antraciet/40 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Zoekopdracht wissen"
                    className="shrink-0 rounded-full p-1 text-antraciet/50 transition-colors hover:text-kobalt"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                )}
              </div>
            </form>
          </Reveal>

          {/* Klikbare onderwerpen */}
          <Reveal delay={220}>
            <div className="mt-5 flex flex-wrap gap-2">
              <TopicChip active={activeCategory === null} onClick={() => setActiveCategory(null)}>
                Alle onderwerpen
              </TopicChip>
              {faqCategories.map((category) => (
                <TopicChip
                  key={category.title}
                  active={activeCategory === category.title}
                  onClick={() => setActiveCategory(category.title)}
                >
                  {category.title}
                </TopicChip>
              ))}
            </div>
          </Reveal>

          {/* Inhoud */}
          <div className="mt-16 grid grid-cols-12 gap-x-8 gap-y-12 sm:mt-20">
            <div className="col-span-12 lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="text-muted-foreground">
                  Geen antwoord gevonden? Stel je vraag gewoon rechtstreeks per mail, dan reageren wij snel.
                </p>
                <a
                  href={mailHref}
                  className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-antraciet underline-offset-[6px] hover:underline"
                >
                  Stel je vraag per mail
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <div className="col-span-12 space-y-16 lg:col-span-7 lg:col-start-6">
              {results.length === 0 ? (
                <p className="text-lead text-muted-foreground">
                  Geen vragen gevonden. Probeer een ander woord of{" "}
                  <a href={mailHref} className="font-semibold text-antraciet underline underline-offset-[6px]">
                    stel je vraag per mail
                  </a>
                  .
                </p>
              ) : (
                results.map(({ category, ci, items }) => (
                  <Reveal key={category.title}>
                    <div>
                      <h2 className="font-heading text-2xl font-bold text-antraciet">{category.title}</h2>
                      <Accordion type="single" collapsible className="mt-5 border-t border-antraciet/15">
                        {items.map((faq, i) => (
                          <AccordionItem key={faq.question} value={`${ci}-${i}`} className="border-antraciet/15">
                            <AccordionTrigger className="py-5 text-left font-heading text-lg hover:no-underline">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </Reveal>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Nog een vraag?"
        text="Wij denken graag met je mee. Plan een vrijblijvend gesprek, dan kijken wij samen verder."
      />
    </>
  );
}

function TopicChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-[3px] px-3.5 py-1.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kobalt focus-visible:ring-offset-2 focus-visible:ring-offset-creme",
        active
          ? "bg-kobalt text-creme"
          : "border border-antraciet/20 text-antraciet/70 hover:border-kobalt hover:text-kobalt",
      )}
    >
      {children}
    </button>
  );
}
