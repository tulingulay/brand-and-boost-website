import { FileText } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";

export default function AlgemeneVoorwaarden() {
  return (
    <>
      <SEO
        title="Algemene voorwaarden — Brand & Boost"
        description="De algemene voorwaarden van Brand & Boost."
        path="/algemene-voorwaarden"
      />

      <PageHero eyebrow="Juridisch" title="Algemene voorwaarden" />

      <Section>
        <div className="mx-auto max-w-3xl">
          {/*
            TODO: plak hier de definitieve algemene voorwaarden.
            Vervang het onderstaande placeholder-blok door je eigen AV-tekst.
            Gebruik <h2>/<h3> voor koppen en <p>/<ul> voor de inhoud, zodat de
            opmaak netjes en toegankelijk blijft.
          */}
          <div className="flex items-start gap-4 rounded-2xl border border-dashed border-border bg-white p-6 sm:p-8">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
              <FileText className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-heading text-lg font-bold text-antraciet">Tekst volgt</h2>
              <p className="mt-2 text-muted-foreground">
                Hier komen de algemene voorwaarden van Brand &amp; Boost. Deze pagina is alvast ingericht; de
                definitieve tekst wordt hier geplaatst.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
