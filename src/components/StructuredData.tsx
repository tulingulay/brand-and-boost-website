import { Helmet } from "react-helmet-async";

import { site, socials } from "@/data/site";
import type { FaqItem } from "@/data/faq";

/**
 * Organization structured data (JSON-LD).
 * Staat op elke pagina (via de Layout) zodat zoekmachines en AI-tools
 * de bedrijfsgegevens betrouwbaar kunnen oppikken. Bewust geen telefoon of
 * fysiek adres: Brand & Boost werkt op afspraak (mailen kan, bellen/langskomen
 * niet) en is daarom geen LocalBusiness met bezoeklocatie.
 */
export function OrganizationJsonLd() {
  const sameAs = socials.map((s) => s.href).filter((href) => href && href !== "#");

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.domain}/#organization`,
    name: site.name,
    url: site.domain,
    email: site.email,
    image: `${site.domain}/og-image.png`,
    logo: `${site.domain}/logo.png`,
    description:
      "Brand & Boost is een marketingpartner voor ambitieuze MKB-ondernemers: geen uurtje-factuurtje, maar partnerschap, creativiteit en echte groei.",
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "KVK",
      value: site.kvk,
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

/**
 * FAQPage structured data, gevoed vanuit src/data/faq.ts.
 * Plaats dit alleen op de FAQ-pagina.
 */
export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
