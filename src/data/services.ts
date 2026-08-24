/**
 * De 8 diensten van Brand & Boost.
 * Concept-copy - mag door de klant aangepast worden. Geen prijzen.
 *
 * `intro` en `highlights` voeden de detailpagina (/diensten/:slug); welke
 * cases bij een dienst horen staat in cases.ts (`serviceIds`).
 */

export interface Service {
  slug: string;
  title: string;
  /** Korte regel voor de kaarten en als subregel op de detailpagina. */
  description: string;
  /** Stockfoto voor de dienstkaart (pad in /public/diensten). */
  image: string;
  /** Langere inleiding op de detailpagina. */
  intro: string;
  /** Wat het inhoudt / waar wij op focussen (checklist op de detailpagina). */
  highlights: string[];
}

export const services: Service[] = [
  {
    slug: "social-media-management",
    title: "Social media management",
    description: "Zichtbaar blijven met content die bij je merk past en je doelgroep raakt.",
    image: "/diensten/social-media-management.webp",
    intro:
      "Zichtbaar blijven vraagt om consistentie en content die klopt. Wij nemen je social media uit handen: van strategie en planning tot posts die je doelgroep echt raken. Zo bouw je aan een merk dat blijft hangen, zonder dat het jou dagelijks tijd kost.",
    highlights: [
      "Een contentkalender die past bij je merk en doelen",
      "Content die je doelgroep aanspreekt en uitnodigt tot reactie",
      "Een consistente uitstraling over al je kanalen",
      "Inzicht in wat werkt, zodat wij blijven bijsturen",
    ],
  },
  {
    slug: "branding",
    title: "Branding",
    description: "Een merk dat klopt, van uitstraling tot gevoel.",
    image: "/diensten/branding.webp",
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
    title: "Videocontent",
    description: "Bewegend beeld dat opvalt en je merk laat leven.",
    image: "/diensten/contentcreatie.webp",
    intro:
      "Bewegend beeld blijft hangen. Wij maken video die je verhaal vertelt en je merk laat leven: van reels en socialvideo tot opname en montage. Altijd in een stijl die bij je past en die je breed kunt inzetten.",
    highlights: [
      "Video en reels die passen bij je merk",
      "Opname en strakke montage",
      "Content die je op meerdere kanalen inzet",
      "Een herkenbare stijl die overal terugkomt",
    ],
  },
  {
    slug: "webdevelopment",
    title: "Website",
    description: "Een website die werkt, snel laadt en fijn voelt op elk scherm.",
    image: "/diensten/webdevelopment.webp",
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
    image: "/diensten/copywriting.webp",
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
    title: "SEO, GEO & AEO",
    description: "Beter vindbaar in Google én in de nieuwe AI-zoekmachines.",
    image: "/diensten/seo-sea-aeo-geo.webp",
    intro:
      "Gevonden worden is het halve werk. Wij zorgen dat je beter vindbaar bent in Google én in de nieuwe generatie AI-zoekmachines. Een aanpak die op cijfers stuurt, zodat je weet waar je inzet naartoe gaat en wat het oplevert.",
    highlights: [
      "Beter vindbaar in Google (SEO)",
      "Vindbaar in AI-zoekmachines (GEO & AEO)",
      "Sterke, vindbare content",
      "Sturen op data en op wat echt verschil maakt",
    ],
  },
  {
    slug: "meta-advertenties",
    title: "Meta advertenties + SEA",
    description: "Advertenties op Facebook, Instagram en in Google (SEA) die echt iets opleveren.",
    image: "/diensten/meta-advertenties.webp",
    intro:
      "Adverteren werkt pas als het klopt: de juiste boodschap, bij de juiste mensen, op het juiste moment. Wij zetten campagnes op Facebook en Instagram én zoekadvertenties in Google (SEA) op, passend bij je merk en sturend op resultaat, niet op onderbuikgevoel.",
    highlights: [
      "Campagnes op Facebook en Instagram",
      "Zoekadvertenties via Google (SEA)",
      "Scherpe targeting op je doelgroep",
      "Sturen op resultaat en bijsturen op data",
    ],
  },
  {
    slug: "custom-drukwerk",
    title: "Custom drukwerk",
    description: "Folders, flyers, visitekaartjes en meer, op maat ontworpen en print-klaar.",
    image: "/diensten/custom-drukwerk.webp",
    intro:
      "Online en offline versterken elkaar. Wij ontwerpen drukwerk dat naadloos bij je merk past: van folders en flyers tot visitekaartjes en banners. Helemaal op maat en print-klaar aangeleverd, zodat je met een verzorgde, herkenbare uitstraling voor de dag komt.",
    highlights: [
      "Ontwerp dat klopt met je online uitstraling",
      "Folders, flyers, visitekaartjes en meer",
      "Print-klaar aangeleverd, zonder gedoe",
      "Eén stijl, online én offline",
    ],
  },
];
