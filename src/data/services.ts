/**
 * De 7 diensten van Brand & Boost.
 * Concept-copy — mag door de klant aangepast worden. Geen prijzen.
 *
 * `icon` verwijst naar een Lucide-icoon dat in ServiceCard wordt gekoppeld.
 */

export type ServiceIcon =
  | "share2"
  | "palette"
  | "camera"
  | "code"
  | "penLine"
  | "search"
  | "target";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: ServiceIcon;
}

export const services: Service[] = [
  {
    slug: "social-media-management",
    title: "Social media management",
    description: "Zichtbaar blijven met content die bij je merk past en je doelgroep raakt.",
    icon: "share2",
  },
  {
    slug: "branding",
    title: "Branding",
    description: "Een merk dat klopt, van uitstraling tot gevoel.",
    icon: "palette",
  },
  {
    slug: "contentcreatie",
    title: "Contentcreatie",
    description: "Beeld en tekst die opvallen en blijven hangen.",
    icon: "camera",
  },
  {
    slug: "webdevelopment",
    title: "Webdevelopment",
    description: "Websites die werken, snel laden en fijn voelen op elk scherm.",
    icon: "code",
  },
  {
    slug: "copywriting",
    title: "Copywriting",
    description: "Woorden die jouw verhaal helder en overtuigend maken.",
    icon: "penLine",
  },
  {
    slug: "seo-sea-aeo-geo",
    title: "SEO, SEA, AEO & GEO",
    description: "Beter vindbaar in Google én in AI-zoekmachines.",
    icon: "search",
  },
  {
    slug: "meta-advertenties",
    title: "Meta advertenties",
    description: "Advertenties op Facebook en Instagram die echt iets opleveren.",
    icon: "target",
  },
];
