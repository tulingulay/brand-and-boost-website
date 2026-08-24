import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { Highlight } from "@/components/Highlight";
import { PageHero } from "@/components/PageHero";
import { ProcessNumbered } from "@/components/ProcessNumbered";
import { Section, SectionHeading } from "@/components/Section";
import { SEO } from "@/components/SEO";

export default function Proces() {
  return (
    <>
      <SEO
        title="Proces · Brand & Boost"
        description="Van kennismaking en strategie tot uitvoering, optimalisatie en groei. Zo werkt Brand & Boost samen met ondernemers, met energie en één aanspreekpunt."
        path="/proces"
      />

      <PageHero
        title={
          <>
            Zo werken wij <Highlight variant="underline">samen</Highlight>.
          </>
        }
        intro="Een heldere aanpak in vier stappen. Met energie, oog voor detail en steeds één vast aanspreekpunt."
      />

      <Section>
        <SectionHeading
          title={
            <>
              Van eerste gesprek tot blijvende <Highlight>groei</Highlight>.
            </>
          }
          intro="Zonder heldere aanpak geen groei. Daarom werken wij in vier vaste stappen, steeds samen met jou en met één vast aanspreekpunt. Zo weet je altijd waar wij staan en waar wij naartoe werken."
        />

        <div className="mt-14 sm:mt-20">
          <ProcessNumbered detailed />
        </div>
      </Section>

      {/* Vervolgpaden: van de aanpak door naar het aanbod en de prijzen. */}
      <Section className="bg-creme">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-antraciet/15 pt-10">
          <Button asChild variant="link" className="h-auto px-0 text-base text-antraciet">
            <Link to="/diensten">
              Bekijk wat wij doen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="link" className="h-auto px-0 text-base text-antraciet">
            <Link to="/faq">
              Vragen over kosten en samenwerking
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
