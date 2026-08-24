import { Helmet } from "react-helmet-async";

import { site, socials } from "@/data/site";
import type { FaqItem } from "@/data/faq";
import type { Service } from "@/data/services";

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
      "Brand & Boost is een partner in groei voor ambitieuze MKB-ondernemers: geen uurtje-factuurtje, maar partnerschap, creativiteit en echte groei.",
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

  // JSON-LD is alleen relevant in de geprerenderde HTML (zie SEO.tsx).
  if (!import.meta.env.SSR) return null;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

/**
 * BreadcrumbList structured data voor subpagina's (met name de acht
 * dienstpagina's). Geef de kruimels in volgorde, inclusief de huidige
 * pagina; Home wordt automatisch vooraan gezet.
 */
export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const crumbs = [{ name: "Home", path: "/" }, ...items];
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${site.domain}${crumb.path === "/" ? "" : crumb.path}`,
    })),
  };

  // JSON-LD is alleen relevant in de geprerenderde HTML (zie SEO.tsx).
  if (!import.meta.env.SSR) return null;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

/**
 * Service structured data voor één dienstpagina. Bewust zonder `offers`:
 * prijzen staan alleen in de FAQ (keuze van de klant) en verzonnen of
 * indicatieve prijzen horen niet in structured data.
 */
export function ServiceJsonLd({ service }: { service: Service }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${site.domain}/diensten/${service.slug}`,
    provider: { "@id": `${site.domain}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
  };

  // JSON-LD is alleen relevant in de geprerenderde HTML (zie SEO.tsx).
  if (!import.meta.env.SSR) return null;

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

  // JSON-LD is alleen relevant in de geprerenderde HTML (zie SEO.tsx).
  if (!import.meta.env.SSR) return null;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
