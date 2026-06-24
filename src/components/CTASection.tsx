import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

import { DecoDots } from "@/components/Decorations";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  text?: string;
  buttonLabel?: string;
  badge?: string;
}

const reassurances = ["Vrijblijvend", "Geen verplichtingen", "Persoonlijk antwoord"];

/**
 * Herbruikbare afsluitende CTA-strook (kobalt band). Met een laagdrempelige
 * tweede optie (bellen) en geruststellende microcopy onder de knop, zodat de
 * stap om contact op te nemen zo klein mogelijk voelt.
 */
export function CTASection({
  title = "Tijd om jouw merk een boost te geven.",
  text = "Plan een vrijblijvend strategiegesprek en ontdek wat er voor jouw merk mogelijk is, helemaal zonder verplichtingen.",
  buttonLabel = "Plan een strategiegesprek",
  badge = "Klaar voor groei?",
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <Reveal
          direction="zoom"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-kobalt to-[#0e5990] px-6 py-14 text-center text-white shadow-soft-lg sm:px-12 sm:py-16 lg:py-20"
        >
          {/* Decoratieve accenten */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-zonnegeel/20 blur-2xl"
          />
          <DecoDots className="absolute left-8 top-8 hidden text-white/10 sm:block" />

          <div className="relative mx-auto max-w-2xl">
            <Eyebrow light>{badge}</Eyebrow>
            <h2 className="mt-5 text-h2 text-white">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lead text-white/90">{text}</p>

            <div className="mt-8 flex justify-center">
              <Button asChild size="lg" className="group bg-white text-primary shadow-soft hover:bg-creme">
                <Link to="/contact">
                  {buttonLabel}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/85">
              {reassurances.map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-zonnegeel" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
