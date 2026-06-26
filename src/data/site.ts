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
  // Telefoon in verschillende notaties
  phoneE164: "+31621411122",
  phoneDisplay: "06 21 41 11 22",
  phoneRaw: "0621411122",
  kvk: "98080733",
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
