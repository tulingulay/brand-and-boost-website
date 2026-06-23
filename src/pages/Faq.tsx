import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";
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
        <Reveal className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Section>

      <CTASection
        title="Nog een vraag?"
        text="We denken graag met je mee. Plan een vrijblijvend gesprek, dan kijken we samen verder."
      />
    </>
  );
}
