/**
 * Centrale, herbruikbare bedrijfsgegevens en navigatie.
 * Zichtbare paginateksten staan bewust in de JSX van de pagina's zelf;
 * dit bestand bevat alleen herhalende, gestructureerde gegevens.
 */

export const site = {
  name: "Brand & Boost",
  domain: "https://brandandboost.nl",
  tagline: "Meer dan marketing, een partner in groei.",
  email: "info@brandandboost.nl",
  kvk: "98080733",
  /**
   * Agenda-link (Calendly/Cal.com). Nog leeg: zodra hier een URL staat,
   * verwijzen de primaire CTA's automatisch naar de agenda in plaats van
   * naar het contactformulier (zie PrimaryCtaButton).
   */
  schedulingUrl: "" as string,
  address: {
    street: "Platostraat 31",
    postalCode: "3076 BL",
    city: "Rotterdam",
    country: "Nederland",
  },
} as const;

export interface NavItem {
  label: string;
  href: string;
}

/** Hoofdmenu (header + footer). */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Diensten", href: "/diensten" },
  { label: "Ons verhaal", href: "/ons-verhaal" },
  { label: "Proces", href: "/proces" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

/** Juridische links (alleen in de footer). */
export const legalNav: NavItem[] = [
  { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
  { label: "Privacyverklaring", href: "/privacyverklaring" },
  { label: "Cookiebeleid", href: "/cookiebeleid" },
];

export type SocialIcon = "instagram" | "linkedin" | "facebook";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

/**
 * Social links. Nog geen Instagram/LinkedIn/Facebook, dus leeg: overal waar
 * socials worden getoond (footer, contact, structured data) zit een
 * `socials.length > 0`-check, dus ze verdwijnen vanzelf. Vul deze lijst aan
 * zodra de profielen er zijn.
 */
export const socials: SocialLink[] = [];
