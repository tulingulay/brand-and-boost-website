import { ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";

export default function Privacyverklaring() {
  return (
    <>
      <SEO
        title="Privacyverklaring · Brand & Boost"
        description="De privacyverklaring van Brand & Boost."
        path="/privacyverklaring"
      />

      <PageHero eyebrow="Juridisch" title="Privacyverklaring" />

      <Section>
        <div className="mx-auto max-w-3xl">
          {/*
            BELANGRIJK: deze privacyverklaring MOET vóór livegang ingevuld worden.
            Het contactformulier verwerkt persoonsgegevens (naam, e-mail,
            telefoon, bedrijf, bericht), dus een geldige privacyverklaring is
            wettelijk verplicht. Vervang het onderstaande placeholder-blok door
            de definitieve tekst.
          */}
          <div className="flex items-start gap-4 rounded-2xl border border-dashed border-border bg-white p-6 sm:p-8">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-heading text-lg font-bold text-antraciet">Binnenkort beschikbaar</h2>
              <p className="mt-2 text-muted-foreground">Onze privacyverklaring wordt binnenkort toegevoegd.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
