import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { Highlight } from "@/components/Highlight";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { coreValues } from "@/data/values";

const brandPromises = [
  {
    title: "Volledige, persoonlijke en energieke aandacht",
    description: "Jij staat centraal, altijd.",
  },
  {
    title: "100% inzet, data-gedreven",
    description: "Wij werken hard én slim, met cijfers als kompas.",
  },
  {
    title: "Eén aanspreekpunt voor al je diensten",
    description: "Heldere communicatie, geen gedoe en geen ruis.",
  },
];

export default function OnsVerhaal() {
  return (
    <>
      <SEO
        title="Ons verhaal · Brand & Boost"
        description="Wie wij zijn en waar wij in geloven: partnerschap, creativiteit en echte groei. Lees de missie, visie en kernwaarden van Brand & Boost."
        path="/ons-verhaal"
      />

      <PageHero
        title={
          <>
            Partnerschap, creativiteit en <Highlight variant="underline">groei</Highlight>.
          </>
        }
        intro="Wie wij zijn, waar wij in geloven en voor wie wij het doen."
      />

      {/* ===== 01 — Voor wie ===== */}
      <Section className="bg-creme">
        <div className="grid grid-cols-12 gap-x-8 gap-y-8">
          <Reveal className="col-span-12 lg:col-span-5">
            <h2 className="text-h2 text-antraciet">Voor wie wij het doen.</h2>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7" delay={120}>
            <p className="text-lead text-muted-foreground">
              Wij werken het liefst met ondernemers die houden van hun vak. Niet met mensen die hun bedrijf erbij doen,
              maar met mensen die echt willen ondernemen en groeien. Wij zoeken sparringpartners met ambitie, het liefst
              in het MKB. Wij denken graag met iedereen mee.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ===== 02 — Missie & Visie (kobalt vlak) ===== */}
      <Section className="bg-kobalt text-creme">
        <h2 className="max-w-2xl text-h2 text-creme">Dit drijft ons.</h2>

        <div className="mt-12 grid grid-cols-12 gap-x-8 gap-y-10">
          <Reveal className="col-span-12 lg:col-span-5">
            <div className="border-t-2 border-zonnegeel pt-6">
              <h3 className="font-heading text-2xl font-bold text-creme">Missie</h3>
              <p className="mt-4 text-creme/80">
                Ondernemers volledige, persoonlijke en energieke aandacht geven, zodat marketing geen bron van stress
                is, maar een motor voor groei. Wij hoeven niet het grootste of sterkste bureau te zijn. Wij willen het
                stabielste en het meest energieke zijn: een team dat doet waar het energie van krijgt, en klanten die
                het oprecht leuk vinden om met ons samen te werken.
              </p>
            </div>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-5 lg:col-start-7" delay={120}>
            <div className="border-t-2 border-zonnegeel pt-6">
              <h3 className="font-heading text-2xl font-bold text-creme">Visie</h3>
              <p className="mt-4 text-creme/80">
                Marketing draait om partnerschap, niet om facturen. Grote bureaus die afrekenen per uur en je daarna
                alleen laten. Daar geloven wij niet in. Wij staan voor creativiteit, betrokkenheid en echte groei. Een
                aanpak waarin merk &amp; mens samen groeien.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ===== 04 — Kernwaarden ===== */}
      <Section className="bg-white">
        <SectionHeading
          title={
            <>
              Waar wij voor staan.
            </>
          }
          intro="De vier waarden waaraan je ons herkent, in alles wat wij doen."
        />

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, index) => (
            <Reveal key={value.title} delay={(index % 4) * 90}>
              <div className="h-full border-t-2 border-kobalt pt-6">
                <h3 className="font-heading text-xl font-bold text-antraciet">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===== 05 — Merkbelofte (kobalt vlak) ===== */}
      <Section className="bg-kobalt text-creme">
        <h2 className="max-w-2xl text-h2 text-creme">Dit beloven wij je.</h2>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {brandPromises.map((promise, index) => (
            <Reveal key={promise.title} delay={(index % 3) * 100}>
              <div className="border-t-2 border-zonnegeel pt-6">
                <h3 className="font-heading text-xl font-bold text-creme">{promise.title}</h3>
                <p className="mt-2 text-creme/75">{promise.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Vervolgpaden: wie ons verhaal uit heeft, wil zien hoe wij werken. */}
      <Section className="bg-creme">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-antraciet/15 pt-10">
          <Button asChild variant="link" className="h-auto px-0 text-base text-antraciet">
            <Link to="/proces">
              Bekijk hoe wij werken
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="link" className="h-auto px-0 text-base text-antraciet">
            <Link to="/diensten">
              Ontdek onze diensten
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
