import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { Highlight } from "@/components/Highlight";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { SectionLabel } from "@/components/SectionLabel";
import { SEO } from "@/components/SEO";
import { coreValues } from "@/data/values";
import { processSteps } from "@/data/process";

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
        eyebrow="Ons verhaal"
        title={
          <>
            Partnerschap, creativiteit en <Highlight variant="underline">groei</Highlight>.
          </>
        }
        intro="Wie wij zijn, waar wij in geloven en voor wie wij het doen."
      />

      {/* ===== 01 — Over ons ===== */}
      <Section className="bg-creme">
        <div className="grid grid-cols-12 gap-x-8 gap-y-8">
          <Reveal className="col-span-12 lg:col-span-5">
            <SectionLabel index="01">Over ons</SectionLabel>
            <h2 className="mt-6 text-h2 text-antraciet">
              Een partner in groei die met je <Highlight color="zonnegeel">meegroeit.</Highlight>
            </h2>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7" delay={120}>
            <p className="text-lead text-muted-foreground">
              Brand &amp; Boost is een partner in groei voor ondernemers die houden van hun vak. Wij geloven niet in
              grote bureaus die afrekenen per uur en je daarna laten zwemmen. Wij geloven in partnerschap, creativiteit
              en groei, en werken het liefst met mensen die net als wij energie krijgen van vooruitgang.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ===== 02 — Missie & Visie (kobalt vlak) ===== */}
      <Section className="bg-kobalt text-creme">
        <SectionLabel index="02" light>
          Missie &amp; visie
        </SectionLabel>
        <h2 className="mt-6 max-w-2xl text-h2 text-creme">Dit drijft ons.</h2>

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
                alleen laten. Daar geloven wij niet in. Wij staan voor creativiteit, betrokkenheid en echte groei. Een aanpak waarin merk &amp; mens samen groeien.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ===== 03 — Onze aanpak ===== */}
      <Section className="bg-creme">
        <div className="grid grid-cols-12 gap-x-8 gap-y-6">
          <Reveal className="col-span-12 lg:col-span-7">
            <SectionLabel index="03">Onze aanpak</SectionLabel>
            <h2 className="mt-6 text-h2 text-antraciet">In vier stappen naar groei.</h2>
          </Reveal>
          <Reveal className="col-span-12 self-end lg:col-span-4 lg:col-start-9" delay={120}>
            <Link
              to="/proces"
              className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-antraciet underline-offset-[6px] hover:underline"
            >
              Bekijk het volledige proces
              <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={(index % 2) * 100}>
              <li className="grid grid-cols-12 gap-x-4 border-t-2 border-antraciet/15 pt-5">
                <span className="col-span-2 font-heading text-2xl font-bold tabular-nums text-kobalt sm:col-span-2">
                  {step.number}
                </span>
                <div className="col-span-10">
                  <h3 className="font-heading text-xl font-bold text-antraciet">{step.title}</h3>
                  <p className="mt-1 font-heading text-base font-semibold text-kobalt">{step.subtitle}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ===== 04 — Kernwaarden ===== */}
      <Section className="bg-creme">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          <Reveal className="col-span-12 lg:col-span-4">
            <SectionLabel index="04">Kernwaarden</SectionLabel>
            <h2 className="mt-6 text-h2 text-antraciet">Waar wij voor staan.</h2>
          </Reveal>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {coreValues.map((value, index) => (
                <Reveal key={value.title} delay={(index % 2) * 100}>
                  <div className="border-t-2 border-antraciet/15 pt-5">
                    <span className="font-heading text-sm font-bold tabular-nums text-kobalt">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-heading text-xl font-bold text-antraciet">{value.title}</h3>
                    <p className="mt-2 text-muted-foreground">{value.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ===== 05 — Merkbelofte (kobalt vlak) ===== */}
      <Section className="bg-kobalt text-creme">
        <SectionLabel index="05" light>
          Merkbelofte
        </SectionLabel>
        <h2 className="mt-6 max-w-2xl text-h2 text-creme">Dit beloven wij je.</h2>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {brandPromises.map((promise, index) => (
            <Reveal key={promise.title} delay={(index % 3) * 100}>
              <div className="border-t-2 border-zonnegeel pt-6">
                <span className="font-heading text-sm font-bold tabular-nums text-zonnegeel">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-heading text-xl font-bold text-creme">{promise.title}</h3>
                <p className="mt-2 text-creme/75">{promise.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===== 06 — Voor wie wij het doen ===== */}
      <Section className="bg-creme">
        <div className="grid grid-cols-12 gap-x-8 gap-y-8">
          <Reveal className="col-span-12 lg:col-span-5">
            <SectionLabel index="06">Voor wie</SectionLabel>
            <h2 className="mt-6 text-h2 text-antraciet">Voor wie wij het doen.</h2>
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

      <CTASection />
    </>
  );
}
