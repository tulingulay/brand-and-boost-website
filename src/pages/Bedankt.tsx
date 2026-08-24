import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SEO } from "@/components/SEO";
import { LEAD_FLAG_KEY, track } from "@/lib/analytics";

/** Vervolgstappen zodat de bezoeker na het versturen niet doodloopt. */
const vervolg = [
  {
    href: "/proces",
    title: "Zo werken wij",
    description: "Bekijk alvast wat je na het eerste gesprek kunt verwachten.",
  },
  {
    href: "/portfolio",
    title: "Ons werk",
    description: "Cases en reviews van ondernemers die je voorgingen.",
  },
  {
    href: "/faq",
    title: "Veelgestelde vragen",
    description: "Antwoorden over samenwerken, planning en prijzen.",
  },
];

export default function Bedankt() {
  // Meet de conversie alleen als het formulier hier echt naartoe stuurde,
  // niet bij een direct bezoek aan /bedankt.
  useEffect(() => {
    if (sessionStorage.getItem(LEAD_FLAG_KEY)) {
      sessionStorage.removeItem(LEAD_FLAG_KEY);
      track("lead_form_submitted");
    }
  }, []);

  return (
    <>
      <SEO
        title="Bedankt · Brand & Boost"
        description="Je bericht is verstuurd. Wij reageren binnen één werkdag."
        path="/bedankt"
        noindex
      />

      <PageHero
        title="Gelukt, je bericht is verstuurd."
        intro="Wij lezen je bericht met aandacht en reageren binnen één werkdag. Daarna plannen wij samen een moment dat jou uitkomt, want wij werken op afspraak."
      />

      <section className="bg-creme">
        <div className="container pb-section">
          <div className="grid gap-x-8 gap-y-10 border-t border-antraciet/15 pt-12 sm:grid-cols-3 sm:pt-16">
            {vervolg.map((item, index) => (
              <Reveal key={item.href} delay={index * 90}>
                <Link to={item.href} className="group block h-full border-t-2 border-kobalt pt-5">
                  <h2 className="font-heading text-xl font-bold text-antraciet transition-colors group-hover:text-primary">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
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
      </section>
    </>
  );
}
