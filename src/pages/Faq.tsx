import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { StatementBox } from "@/components/StatementBox";
import { FaqJsonLd } from "@/components/StructuredData";
import { faqs } from "@/data/faq";

export default function Faq() {
  return (
    <>
      <SEO
        title="Veelgestelde vragen — Brand & Boost"
        description="Antwoorden op veelgestelde vragen over Brand & Boost: voor wie we werken, hoe we samenwerken, één aanspreekpunt, data-gedreven werken en meer."
        path="/faq"
      />
      <FaqJsonLd items={faqs} />

      <PageHero
        eyebrow="FAQ"
        title="Veelgestelde vragen."
        intro="Het antwoord op de vragen die ondernemers ons het vaakst stellen. Staat jouw vraag er niet bij? Stel 'm gerust."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start lg:gap-12">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
          <Reveal delay={120} className="lg:sticky lg:top-28">
            <StatementBox label="Geen antwoord gevonden?" cta={{ label: "Plan een strategiegesprek", to: "/contact" }}>
              Stel je vraag gewoon rechtstreeks aan ons.
            </StatementBox>
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
