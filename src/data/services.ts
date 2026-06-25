/**
 * De 7 diensten van Brand & Boost.
 * Concept-copy - mag door de klant aangepast worden. Geen prijzen.
 *
 * `icon`      verwijst naar een Lucide-icoon (zie ServiceCard / icons.tsx).
 * `intro`     en `highlights` voeden de detailpagina (/diensten/:slug).
 *             Dit zijn algemene, eerlijke omschrijvingen - vul gerust aan met
 *             concrete voorbeelden, cases of werkwijze.
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
  /** Korte regel voor de kaarten en als subregel op de detailpagina. */
  description: string;
  icon: ServiceIcon;
  /** Korte kernwoorden van wat de dienst omvat (bullets op de dienstkaart). */
  offerings: string[];
  /** Langere inleiding op de detailpagina. */
  intro: string;
  /** Wat het inhoudt / waar we op focussen (checklist op de detailpagina). */
  highlights: string[];
}

export const services: Service[] = [
  {
    slug: "social-media-management",
    title: "Social media management",
    description: "Zichtbaar blijven met content die bij je merk past en je doelgroep raakt.",
    icon: "share2",
    offerings: ["Strategie & planning", "Contentkalender", "Community management"],
    intro:
      "Zichtbaar blijven vraagt om consistentie en content die klopt. Wij nemen je social media uit handen: van strategie en planning tot posts die je doelgroep echt raken. Zo bouw je aan een merk dat blijft hangen, zonder dat het jou dagelijks tijd kost.",
    highlights: [
      "Een contentkalender die past bij je merk en doelen",
      "Content die je doelgroep aanspreekt en uitnodigt tot reactie",
      "Een consistente uitstraling over al je kanalen",
      "Inzicht in wat werkt, zodat we blijven bijsturen",
    ],
  },
  {
    slug: "branding",
    title: "Branding",
    description: "Een merk dat klopt, van uitstraling tot gevoel.",
    icon: "palette",
    offerings: ["Merkidentiteit", "Logo & huisstijl", "Tone of voice"],
    intro:
      "Een sterk merk is meer dan een logo, het is het gevoel dat mensen bij je krijgen. Wij helpen je merk kloppend te maken, van uitstraling tot tone of voice, zodat je herkenbaar bent en vertrouwen wekt bij de mensen die je wil bereiken.",
    highlights: [
      "Een heldere merkidentiteit die bij je past",
      "Een consistente visuele stijl",
      "Een tone of voice die klinkt als jij",
      "Richtlijnen zodat je merk overal klopt",
    ],
  },
  {
    slug: "contentcreatie",
    title: "Contentcreatie",
    description: "Beeld en tekst die opvallen en blijven hangen.",
    icon: "camera",
    offerings: ["Fotografie & video", "Geschreven content", "Herkenbare stijl"],
    intro:
      "Goede content valt op en blijft hangen. Wij maken beeld en tekst die je verhaal vertellen en je merk versterken, of het nu gaat om foto, video of geschreven content. Altijd in een stijl die bij je past en die je breed kunt inzetten.",
    highlights: [
      "Beeld en video dat past bij je merk",
      "Teksten die je boodschap helder maken",
      "Content die je op meerdere kanalen inzet",
      "Een herkenbare stijl die overal terugkomt",
    ],
  },
  {
    slug: "webdevelopment",
    title: "Webdevelopment",
    description: "Websites die werken, snel laden en fijn voelen op elk scherm.",
    icon: "code",
    offerings: ["Webdesign", "Websites & webshops", "Snel & vindbaar"],
    intro:
      "Je website is vaak de eerste indruk. Wij bouwen sites die snel laden, fijn werken op elk scherm en je bezoekers moeiteloos naar de volgende stap leiden. Gebouwd met oog voor vindbaarheid en makkelijk uit te breiden als je groeit.",
    highlights: [
      "Een website die snel laadt en goed presteert",
      "Fijn te gebruiken op telefoon, tablet en desktop",
      "Gebouwd met oog voor vindbaarheid",
      "Makkelijk uit te breiden als je groeit",
    ],
  },
  {
    slug: "copywriting",
    title: "Copywriting",
    description: "Woorden die jouw verhaal helder en overtuigend maken.",
    icon: "penLine",
    offerings: ["Websiteteksten", "Nieuwsbrieven", "Advertentieteksten"],
    intro:
      "De juiste woorden maken het verschil. Wij schrijven teksten die je verhaal helder en overtuigend maken, in een toon die bij je merk past. Van je website tot je nieuwsbrief en advertenties, met oog voor je doelgroep én je vindbaarheid.",
    highlights: [
      "Teksten die je boodschap scherp neerzetten",
      "Een tone of voice die bij je merk past",
      "Van website tot nieuwsbrief en advertentie",
      "Geschreven met oog voor doelgroep en vindbaarheid",
    ],
  },
  {
    slug: "seo-sea-aeo-geo",
    title: "SEO, SEA, AEO & GEO",
    description: "Beter vindbaar in Google én in AI-zoekmachines.",
    icon: "search",
    offerings: ["SEO & SEA", "AEO & GEO", "Sturen op data"],
    intro:
      "Gevonden worden is het halve werk. We zorgen dat je beter vindbaar bent in Google én in de nieuwe generatie AI-zoekmachines. Een aanpak die op cijfers stuurt, zodat je weet waar je inzet naartoe gaat en wat het oplevert.",
    highlights: [
      "Beter vindbaar in Google (SEO)",
      "Gerichte advertenties via Google (SEA)",
      "Vindbaar in AI-zoekmachines (AEO & GEO)",
      "Sturen op data en op wat echt verschil maakt",
    ],
  },
  {
    slug: "meta-advertenties",
    title: "Meta advertenties",
    description: "Advertenties op Facebook en Instagram die echt iets opleveren.",
    icon: "target",
    offerings: ["Facebook & Instagram", "Scherpe targeting", "Sturen op resultaat"],
    intro:
      "Adverteren op Facebook en Instagram werkt pas als het klopt: de juiste boodschap, bij de juiste mensen, op het juiste moment. Wij zetten campagnes op die passen bij je merk en sturen op resultaat, niet op onderbuikgevoel.",
    highlights: [
      "Campagnes op Facebook en Instagram",
      "Scherpe targeting op je doelgroep",
      "Advertenties die passen bij je merk",
      "Sturen op resultaat en bijsturen op data",
    ],
  },
];
