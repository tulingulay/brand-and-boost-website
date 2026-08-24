/**
 * Google Analytics 4 met Consent Mode v2.
 *
 * - Zonder VITE_GA4_ID (zie .env.example) is dit hele bestand een no-op:
 *   er wordt geen script geladen en track() doet niets. Zo draait de
 *   dev-preview schoon en kan het meet-ID later zonder codewijziging via
 *   een environment variable worden aangezet.
 * - Consent Mode: alles start op "denied". Pas wanneer de bezoeker in de
 *   cookiemelding op Akkoord klikt (of dat eerder deed, zie localStorage)
 *   wordt analytics_storage op "granted" gezet. Advertentie-consent blijft
 *   altijd "denied": de site gebruikt geen advertentiecookies.
 */

export type EventProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined;

/** localStorage-sleutel van de cookiekeuze (gedeeld met CookieConsent). */
export const CONSENT_STORAGE_KEY = "bb-cookie-consent";

/**
 * Sleutel waarmee het contactformulier aan de bedankpagina doorgeeft dat er
 * echt zojuist verzonden is. Voorkomt dat een direct bezoek aan /bedankt
 * als conversie meetelt.
 */
export const LEAD_FLAG_KEY = "bb-lead-verzonden";

export type ConsentValue = "accepted" | "rejected";

/** Lees de eerder opgeslagen cookiekeuze (of null als die er niet is). */
export function readStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const value = (JSON.parse(raw) as { value?: string }).value;
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

/** Zet gtag klaar, met consent default "denied", en laad het GA4-script. */
export function initAnalytics(): void {
  if (typeof window === "undefined" || !GA4_ID) return;

  window.dataLayer = window.dataLayer ?? [];
  // Klassiek gtag-snippet: argumenten als geheel op de dataLayer.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };

  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA4_ID, { anonymize_ip: true });

  // Een eerder gegeven Akkoord meteen toepassen.
  if (readStoredConsent() === "accepted") applyConsent("accepted");

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`;
  document.head.appendChild(script);
}

/** Vertaal de keuze uit de cookiemelding naar een Consent Mode-update. */
export function applyConsent(value: ConsentValue): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: value === "accepted" ? "granted" : "denied",
  });
}

/** Stuur een event naar GA4. Stil no-op zolang gtag niet geladen is. */
export function track(event: string, props?: EventProps): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, props ?? {});
}
