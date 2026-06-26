import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  text?: string;
  buttonLabel?: string;
  /** Niet meer getoond, maar behouden zodat bestaande aanroepen blijven werken. */
  badge?: string;
}

const reassurances = ["Vrijblijvend", "Geen verplichtingen", "Persoonlijk antwoord"];

/**
 * Afsluitende CTA als vol kobaltvlak. Asymmetrisch (kop links, actie rechts),
 * één knopontwerp, geen gradient of decoratieve blobs.
 */
export function CTASection({
  title = "Tijd om jouw merk een boost te geven.",
  text = "Plan een vrijblijvend strategiegesprek en ontdek wat er voor jouw merk mogelijk is.",
  buttonLabel = "Plan een strategiegesprek",
}: CTASectionProps) {
  return (
    <section className="bg-kobalt text-creme">
      <div className="container py-section">
        <div className="grid grid-cols-12 items-end gap-y-10 lg:gap-x-8">
          <Reveal className="col-span-12 lg:col-span-8">
            <h2 className="max-w-[16ch] text-h1 text-creme">{title}</h2>
            <p className="mt-6 max-w-xl text-lead text-creme/80">{text}</p>
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-4 lg:justify-self-end lg:text-right" delay={120}>
            <Button asChild size="lg" variant="onDark">
              <Link to="/contact">
                {buttonLabel}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <p className="mt-5 text-sm text-creme/70">{reassurances.join("  ·  ")}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
