import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionLabel } from "@/components/SectionLabel";
import { SEO } from "@/components/SEO";
import { FaqJsonLd } from "@/components/StructuredData";
import { faqs } from "@/data/faq";

export default function Faq() {
  return (
    <>
      <SEO
        title="Veelgestelde vragen · Brand & Boost"
        description="Antwoorden op veelgestelde vragen over Brand & Boost: voor wie we werken, hoe we samenwerken, één aanspreekpunt, data-gedreven werken en meer."
        path="/faq"
      />
      <FaqJsonLd items={faqs} />

      <PageHero
        eyebrow="FAQ"
        title="Veelgestelde vragen."
        intro="Het antwoord op de vragen die ondernemers ons het vaakst stellen. Staat jouw vraag er niet bij? Stel 'm gerust."
      />

      <Section className="bg-creme">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          <Reveal className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionLabel index="01">Goed om te weten</SectionLabel>
              <h2 className="mt-6 text-h2 text-antraciet">Eerst even dit.</h2>
              <p className="mt-5 text-muted-foreground">Geen antwoord gevonden? Stel je vraag gewoon rechtstreeks.</p>
              <Link
                to="/contact"
                className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-antraciet underline-offset-[6px] hover:underline"
              >
                Plan een strategiegesprek
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Accordion type="single" collapsible className="w-full border-t border-antraciet/15">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`} className="border-antraciet/15">
                  <AccordionTrigger className="py-6 text-left font-heading text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Nog een vraag?"
        text="We denken graag met je mee. Plan een vrijblijvend gesprek, dan kijken we samen verder."
      />
    </>
  );
}
