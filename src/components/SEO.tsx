import { Helmet } from "react-helmet-async";

import { site } from "@/data/site";

interface SEOProps {
  /** Volledige paginatitel, bijv. "Diensten — Brand & Boost". */
  title: string;
  description: string;
  /** Pad van de pagina, bijv. "/diensten" of "/". */
  path: string;
  /** Optionele eigen Open Graph-afbeelding (absolute URL). */
  ogImage?: string;
  noindex?: boolean;
}

/**
 * Zet per pagina een unieke <title>, meta-description, canonical URL en
 * Open Graph / Twitter Card-tags. Houdt <html lang="nl"> aan.
 */
export function SEO({ title, description, path, ogImage, noindex }: SEOProps) {
  const canonical = `${site.domain}${path === "/" ? "" : path}`;
  // TODO: vervang og-image.png door de definitieve afbeelding (1200x630).
  const image = ogImage ?? `${site.domain}/og-image.png`;

  return (
    <Helmet>
      <html lang="nl" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="nl_NL" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
