import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { site } from "@/data/site";

interface SEOProps {
  /** Volledige paginatitel, bijv. "Diensten · Brand & Boost". */
  title: string;
  description: string;
  /** Pad van de pagina, bijv. "/diensten" of "/". */
  path: string;
  /** Optionele eigen Open Graph-afbeelding (absolute URL). */
  ogImage?: string;
  noindex?: boolean;
}

/** Zet (of maak) een meta-tag en geef het element terug. */
function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Zet per pagina een unieke <title>, meta-description, canonical URL en
 * Open Graph / Twitter Card-tags. Houdt <html lang="nl"> aan.
 *
 * Twee lagen, bewust:
 * - <Helmet> levert de head voor de prerender (scripts/prerender.mjs leest
 *   de verzamelde tags via de HelmetProvider-context). Dat is wat crawlers
 *   en link-previews zien.
 * - Het useEffect hieronder werkt dezelfde tags client-side bij. Nodig
 *   omdat react-helmet-async de head niet betrouwbaar bijwerkt bij
 *   client-side navigatie (de titel bleef dan van de vorige pagina staan);
 *   de tags staan er na de prerender al, dus dit muteert alleen waarden.
 */
export function SEO({ title, description, path, ogImage, noindex }: SEOProps) {
  const canonical = `${site.domain}${path === "/" ? "" : path}`;
  const image = ogImage ?? `${site.domain}/og-image.png`;

  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    if (noindex) {
      setMeta("name", "robots", "noindex, nofollow");
      document.head.querySelector('link[rel="canonical"]')?.remove();
    } else {
      document.head.querySelector('meta[name="robots"]')?.remove();
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
  }, [title, description, canonical, image, noindex]);

  // Client-side beheert het effect hierboven de head. Helmet daarnaast ook
  // laten committen geeft een race waarbij zijn (kapotte) update net ná het
  // effect vuurt en de titel één navigatie laat achterlopen. Daarom rendert
  // de Helmet-verzameling alleen in de SSR-build, voor de prerender.
  if (!import.meta.env.SSR) return null;

  return (
    <Helmet>
      <html lang="nl" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Een noindex-pagina hoort geen canonical te adverteren. */}
      {!noindex && <link rel="canonical" href={canonical} />}
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
