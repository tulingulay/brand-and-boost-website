import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { Highlight } from "@/components/Highlight";
import { socialIcons } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-antraciet/70">Liever direct mailen?</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 inline-block break-all font-heading text-xl font-bold text-antraciet underline-offset-[6px] transition-colors hover:text-kobalt hover:underline"
              >
                {site.email}
              </a>
              <p className="mt-2 text-sm text-muted-foreground">Wij reageren meestal binnen één werkdag.</p>
            </div>

            <div className="mt-10 border-t-2 border-antraciet/15 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-antraciet/70">Altijd op afspraak</p>
              <p className="mt-3 text-muted-foreground">
                Wij werken volledig op afspraak, zodat wij echt de tijd voor je nemen. Laat je telefoonnummer achter, dan
                bellen of mailen wij je snel terug om een moment te plannen dat jou uitkomt.
              </p>
            </div>

            {socials.length > 0 && (
              <div className="mt-10 border-t-2 border-antraciet/15 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-antraciet/70">Volg ons</p>
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

        {/* Vervolgpaden voor wie nog niet klaar is om te versturen:
            zo loopt de contactpagina nergens dood. */}
        <div className="mt-20 border-t border-antraciet/15 pt-12">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-antraciet">Nog even rondkijken?</h2>
          </Reveal>
          <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-3">
            {[
              { href: "/proces", title: "Zo werken wij", description: "Onze aanpak in vier heldere stappen." },
              { href: "/portfolio", title: "Ons werk", description: "Cases en reviews van ondernemers." },
              { href: "/faq", title: "Veelgestelde vragen", description: "Antwoorden, inclusief onze prijzen." },
            ].map((item, index) => (
              <Reveal key={item.href} delay={index * 90}>
                <Link to={item.href} className="group block h-full border-t-2 border-kobalt pt-5">
                  <h3 className="font-heading text-lg font-bold text-antraciet transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Bekijk
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
