import { PrimaryCtaButton } from "@/components/PrimaryCta";
import { Reveal } from "@/components/Reveal";

interface CTASectionProps {
  title?: string;
  text?: string;
  buttonLabel?: string;
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
            <PrimaryCtaButton label={buttonLabel} variant="onDark" />
            <p className="mt-5 text-sm text-creme/70">{reassurances.join("  ·  ")}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
