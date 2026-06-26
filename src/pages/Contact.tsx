import { ContactForm } from "@/components/ContactForm";
import { Highlight } from "@/components/Highlight";
import { socialIcons } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionLabel } from "@/components/SectionLabel";
import { SEO } from "@/components/SEO";
import { site, socials } from "@/data/site";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact · Brand & Boost"
        description="Even kennismaken met Brand & Boost? Laat een bericht achter via het formulier of mail ons direct. Wij werken op afspraak en denken graag met je mee over jouw groei."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title={
          <>
            <Highlight variant="underline">Kennismaken</Highlight>? Daar houden wij van.
          </>
        }
        intro="Heb je een vraag, een idee of gewoon zin om te sparren? Laat een bericht achter, dan plannen wij snel een vrijblijvend gesprek. Wij werken op afspraak, zodat wij echt de tijd voor je nemen."
      />

      <Section className="bg-creme">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          {/* Formulier */}
          <Reveal className="col-span-12 lg:col-span-7">
            <SectionLabel index="01">Stuur een bericht</SectionLabel>
            <h2 className="text-h2 text-antraciet">Laten wij kennismaken.</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Laat je gegevens achter, dan nemen wij snel persoonlijk contact met je op. Velden met een sterretje zijn
              verplicht.
            </p>
            <div className="mt-8 border-t-2 border-kobalt pt-8">
              <ContactForm />
            </div>
          </Reveal>

          {/* Contactinfo */}
          <Reveal className="col-span-12 lg:col-span-4 lg:col-start-9" delay={120}>
            <div className="border-t-2 border-antraciet/15 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-antraciet/50">Liever direct mailen?</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 inline-block break-all font-heading text-xl font-bold text-antraciet underline-offset-[6px] transition-colors hover:text-kobalt hover:underline"
              >
                {site.email}
              </a>
              <p className="mt-2 text-sm text-muted-foreground">Wij reageren meestal binnen één werkdag.</p>
            </div>

            <div className="mt-10 border-t-2 border-antraciet/15 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-antraciet/50">Altijd op afspraak</p>
              <p className="mt-3 text-muted-foreground">
                Wij werken volledig op afspraak, zodat wij echt de tijd voor je nemen. Laat je telefoonnummer achter, dan
                bellen of mailen wij je snel terug om een moment te plannen dat jou uitkomt.
              </p>
            </div>

            {socials.length > 0 && (
              <div className="mt-10 border-t-2 border-antraciet/15 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-antraciet/50">Volg ons</p>
                <ul className="mt-4 flex items-center gap-5">
                  {socials.map((social) => {
                    const Icon = socialIcons[social.icon];
                    return (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="inline-flex text-antraciet transition-colors hover:text-kobalt"
                        >
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </Reveal>
        </div>
      </Section>
    </>
  );
}
