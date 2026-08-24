import { services } from "@/data/services";

/**
 * Eén bron voor alle routes van de site. Wordt gebruikt door:
 * - scripts/prerender.mjs: welke pagina's als statische HTML worden geschreven;
 * - de sitemap-generator (onderdeel van datzelfde script).
 *
 * Nieuwe pagina? Voeg hem toe in src/App.tsx én hier; de prerender-stap
 * controleert bij de build of beide lijsten dezelfde paden kennen.
 */

export interface PrerenderRoute {
  path: string;
  changefreq: "monthly" | "yearly";
  priority: number;
  /** Niet opnemen in de sitemap (wel prerenderen), bijv. /bedankt. */
  noindex?: boolean;
}

export const prerenderRoutes: PrerenderRoute[] = [
  { path: "/", changefreq: "monthly", priority: 1.0 },
  { path: "/diensten", changefreq: "monthly", priority: 0.9 },
  ...services.map((service) => ({
    path: `/diensten/${service.slug}`,
    changefreq: "monthly" as const,
    priority: 0.8,
  })),
  { path: "/ons-verhaal", changefreq: "monthly", priority: 0.7 },
  { path: "/proces", changefreq: "monthly", priority: 0.7 },
  { path: "/portfolio", changefreq: "monthly", priority: 0.8 },
  { path: "/faq", changefreq: "monthly", priority: 0.7 },
  { path: "/contact", changefreq: "monthly", priority: 0.8 },
  { path: "/bedankt", changefreq: "yearly", priority: 0.1, noindex: true },
  { path: "/algemene-voorwaarden", changefreq: "yearly", priority: 0.2 },
  { path: "/privacyverklaring", changefreq: "yearly", priority: 0.2 },
  { path: "/cookiebeleid", changefreq: "yearly", priority: 0.2 },
];
