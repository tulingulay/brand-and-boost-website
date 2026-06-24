import { Check, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { DecoDots } from "@/components/Decorations";
import { Eyebrow } from "@/components/Eyebrow";
import { socialIcons } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { site, socials } from "@/data/site";

const reassurances = ["Vrijblijvend gesprek", "Persoonlijke aandacht", "Geen verkooppraatjes"];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact — Brand & Boost"
        description="Plan een vrijblijvend gesprek met Brand & Boost. Stuur een bericht via het formulier of bel of mail ons direct. We zitten in Rotterdam."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title="Plan een strategiegesprek."
        intro="Tijd om jouw merk een boost te geven? Laat je gegevens achter, dan plannen we snel een vrijblijvend gesprek."
      />

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
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Contactgegevens */}
          <Reveal direction="left">
            <Eyebrow>Even kennismaken</Eyebrow>
            <h2 className="mt-4 text-h2">Liever direct contact?</h2>
            <p className="mt-4 text-lead text-muted-foreground">
              Bellen of mailen kan natuurlijk ook — we reageren snel en denken graag met je mee. Geen verkooppraatjes,
              wél een goed gesprek.
            </p>

            <ul className="mt-8 space-y-4">
              <li>
                <Card className="group flex items-start gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-kobalt text-white transition-transform duration-300 group-hover:-rotate-6">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-antraciet">Adres</p>
                    <address className="mt-0.5 not-italic text-muted-foreground">
                      {site.address.street}
                      <br />
                      {site.address.postalCode} {site.address.city}
                    </address>
                  </div>
                </Card>
              </li>
              <li>
                <Card className="group flex items-start gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zonnegeel text-antraciet transition-transform duration-300 group-hover:-rotate-6">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-antraciet">Telefoon</p>
                    <a
                      href={`tel:${site.phoneE164}`}
                      className="mt-0.5 inline-block rounded-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {site.phoneDisplay}
                    </a>
                  </div>
                </Card>
              </li>
              <li>
                <Card className="group flex items-start gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-kastanje text-white transition-transform duration-300 group-hover:-rotate-6">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-antraciet">E-mail</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-0.5 inline-block break-all rounded-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {site.email}
                    </a>
                  </div>
                </Card>
              </li>
            </ul>

            {/* Geruststelling */}
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {reassurances.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full bg-zonnegeel/15 px-3 py-1.5 text-sm font-semibold text-kastanje ring-1 ring-zonnegeel/30"
                >
                  <Check className="h-4 w-4 text-zonnegeel" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Social */}
            {socials.length > 0 && (
              <div className="mt-8">
                <p className="text-sm font-bold uppercase tracking-wider text-antraciet/60">Volg ons</p>
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
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-primary transition-colors hover:bg-kobalt hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </Reveal>

          {/* Formulier */}
          <Reveal direction="right" delay={120}>
            <Card className="overflow-hidden border-t-4 border-zonnegeel p-6 sm:p-8">
              <h2 className="text-h3 font-heading">Stuur een bericht</h2>
              <p className="mt-2 text-muted-foreground">Vul het formulier in, dan nemen we snel contact met je op.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
