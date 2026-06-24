import { ArrowRight, CalendarClock, Check, Mail } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { DecoDots } from "@/components/Decorations";
import { socialIcons } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { site, socials } from "@/data/site";

const reassurances = ["Vrijblijvend gesprek", "Persoonlijke aandacht", "Snel een reactie"];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact · Brand & Boost"
        description="Even kennismaken met Brand & Boost? Laat een bericht achter via het formulier of mail ons direct. We werken op afspraak en denken graag met je mee over jouw groei."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title="Kennismaken? Daar houden we van."
        intro="Heb je een vraag, een idee of gewoon zin om eens te sparren? Laat hieronder een bericht achter, dan plannen we snel een vrijblijvend gesprek. We werken op afspraak, zodat we echt de tijd voor je nemen en met volle aandacht meedenken over waar jij naartoe wilt."
      >
        <ul className="flex flex-wrap gap-2.5">
          {reassurances.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20"
            >
              <Check className="h-4 w-4 text-zonnegeel" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </PageHero>

      {/* ===== Formulier + contactinfo ===== */}
      <Section
        decoration={
          <>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-zonnegeel/10 blur-3xl"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-kobalt/10 blur-3xl"
            />
            <DecoDots className="absolute right-10 top-16 hidden text-kobalt/15 lg:block" />
          </>
        }
      >
        <SectionHeading
          align="center"
          eyebrow="Even kennismaken"
          title="Zo komen we in contact."
          intro="Vul het formulier in en laat ook je telefoonnummer achter, dan nemen wij het initiatief en plannen we samen een moment dat jou goed uitkomt. Liever eerst even mailen? Dat kan natuurlijk ook. We reageren meestal binnen één werkdag en denken graag vrijblijvend met je mee."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Formulier */}
          <Reveal direction="left">
            <Card className="overflow-hidden border-t-4 border-zonnegeel p-6 sm:p-8">
              <h2 className="text-h3 font-heading">Stuur een bericht</h2>
              <p className="mt-2 text-muted-foreground">
                Laat je gegevens achter, dan nemen we snel persoonlijk contact met je op om kennis te maken.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Card>
          </Reveal>

          {/* Contactinfo */}
          <Reveal direction="right" delay={120}>
            <Card className="flex h-full flex-col p-6 sm:p-8">
              {/* Mailen */}
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-kobalt text-white">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-antraciet/55">Liever direct mailen?</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 inline-block break-all font-heading text-lg font-bold text-antraciet transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kobalt focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                  >
                    {site.email}
                  </a>
                  <p className="mt-0.5 text-sm text-muted-foreground">We reageren meestal binnen één werkdag.</p>
                </div>
              </div>

              <hr className="my-6 border-border" />

              {/* Werkwijze: op afspraak */}
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zonnegeel text-antraciet">
                  <CalendarClock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-antraciet/55">Altijd op afspraak</p>
                  <p className="mt-1 text-muted-foreground">
                    We werken volledig op afspraak, zodat we echt de tijd voor je nemen. Laat je telefoonnummer achter
                    in het formulier, dan bellen of mailen we je snel terug om samen een moment te plannen dat jou
                    uitkomt.
                  </p>
                </div>
              </div>

              {/* Social */}
              {socials.length > 0 && (
                <div className="mt-auto pt-8">
                  <p className="text-sm font-bold uppercase tracking-wider text-antraciet/55">Volg ons</p>
                  <ul className="mt-3 flex items-center gap-3">
                    {socials.map((social) => {
                      const Icon = socialIcons[social.icon];
                      return (
                        <li key={social.label}>
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-primary transition-colors hover:bg-kobalt hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                          >
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
