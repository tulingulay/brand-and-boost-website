import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { site } from "@/data/site";

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

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Contactgegevens */}
          <Reveal>
            <h2 className="text-h3 font-heading">Direct contact</h2>
            <p className="mt-3 text-muted-foreground">
              Liever meteen bellen of mailen? Dat kan natuurlijk ook. We reageren snel.
            </p>

            <ul className="mt-8 space-y-4">
              <li>
                <Card className="flex items-start gap-4 p-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-antraciet">Adres</p>
                    <address className="not-italic text-muted-foreground">
                      {site.address.street}
                      <br />
                      {site.address.postalCode} {site.address.city}
                    </address>
                  </div>
                </Card>
              </li>
              <li>
                <Card className="flex items-start gap-4 p-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-antraciet">Telefoon</p>
                    <a
                      href={`tel:${site.phoneE164}`}
                      className="rounded-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {site.phoneDisplay}
                    </a>
                  </div>
                </Card>
              </li>
              <li>
                <Card className="flex items-start gap-4 p-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-antraciet">E-mail</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="rounded-sm break-all text-muted-foreground transition-colors hover:text-primary"
                    >
                      {site.email}
                    </a>
                  </div>
                </Card>
              </li>
            </ul>
          </Reveal>

          {/* Formulier */}
          <Reveal delay={80}>
            <Card className="p-6 sm:p-8">
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
