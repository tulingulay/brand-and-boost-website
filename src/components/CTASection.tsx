import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  text?: string;
  buttonLabel?: string;
}

/** Herbruikbare afsluitende CTA-strook (kobalt band). */
export function CTASection({
  title = "Tijd om jouw merk een boost te geven.",
  text = "Samen zetten we de volgende stap.",
  buttonLabel = "Plan een strategiegesprek",
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-3xl bg-kobalt px-6 py-14 text-center text-white shadow-soft-lg sm:px-12 sm:py-16">
          {/* Subtiele decoratieve cirkels */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-zonnegeel/20"
          />
          <div className="relative mx-auto max-w-2xl">
            <span aria-hidden="true" className="mx-auto mb-5 block h-1 w-12 rounded-full bg-zonnegeel" />
            <h2 className="text-h2 text-white">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lead text-white/90">{text}</p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="group bg-white text-primary shadow-soft hover:bg-creme"
              >
                <Link to="/contact">
                  {buttonLabel}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
