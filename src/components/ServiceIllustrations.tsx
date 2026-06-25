import type { ComponentType, SVGProps } from "react";

import type { ServiceIcon } from "@/data/services";

/**
 * Custom illustraties per dienst — vlakke, meerkleurige composities die verder
 * gaan dan een icoon. Elke illustratie vult een 16:9 vlak (viewBox 320x180) met
 * een eigen merkkleur-achtergrond. Tekent met Tailwind fill/stroke-klassen zodat
 * alles in de huisstijl blijft (kobalt, zonnegeel, kastanje, creme).
 */

type IllustrationProps = SVGProps<SVGSVGElement>;

const svgBase = {
  viewBox: "0 0 320 180",
  fill: "none",
  preserveAspectRatio: "xMidYMid meet",
  "aria-hidden": true,
} as const;

/** Social media management — feedkaart met hartje en reactie. */
function SocialIllustration(props: IllustrationProps) {
  return (
    <svg {...svgBase} {...props}>
      <rect width="320" height="180" className="fill-kobalt" fillOpacity={0.08} />
      <circle cx="262" cy="44" r="30" className="fill-zonnegeel" fillOpacity={0.18} />
      <rect x="86" y="34" width="148" height="112" rx="16" className="fill-white" />
      <circle cx="112" cy="62" r="12" className="fill-kobalt" />
      <rect x="132" y="55" width="64" height="8" rx="4" className="fill-antraciet" fillOpacity={0.16} />
      <rect x="132" y="69" width="42" height="7" rx="3.5" className="fill-antraciet" fillOpacity={0.1} />
      <rect x="104" y="90" width="112" height="42" rx="10" className="fill-creme" />
      <path d="M150 104c-4-6-15-5-15 3 0 7 15 16 15 16s15-9 15-16c0-8-11-9-15-3z" className="fill-zonnegeel" />
      <path d="M58 110h34a10 10 0 0 1 10 10v10a10 10 0 0 1-10 10H76l-12 11v-11h-6a10 10 0 0 1-10-10v-10a10 10 0 0 1 10-10z" className="fill-kastanje" />
      <circle cx="68" cy="125" r="3" className="fill-white" />
      <circle cx="78" cy="125" r="3" className="fill-white" />
      <circle cx="88" cy="125" r="3" className="fill-white" />
    </svg>
  );
}

/** Branding — palet met verfstippen en penseel. */
function BrandingIllustration(props: IllustrationProps) {
  return (
    <svg {...svgBase} {...props}>
      <rect width="320" height="180" className="fill-zonnegeel" fillOpacity={0.16} />
      <circle cx="64" cy="138" r="34" className="fill-kobalt" fillOpacity={0.12} />
      <path
        d="M150 40c-40 0-72 28-72 60 0 18 16 26 32 24 10-1 12 8 6 14-4 5-1 12 8 12 38 0 70-26 70-58 0-30-22-52-52-52z"
        className="fill-white"
      />
      <circle cx="132" cy="66" r="9" className="fill-kobalt" />
      <circle cx="166" cy="62" r="9" className="fill-zonnegeel" />
      <circle cx="186" cy="92" r="9" className="fill-kastanje" />
      <circle cx="138" cy="100" r="9" className="fill-kobalt" fillOpacity={0.4} />
      <rect x="214" y="34" width="14" height="76" rx="7" transform="rotate(34 214 34)" className="fill-kastanje" />
      <path d="M243 118l12 8-2 14-13-6z" className="fill-zonnegeel" />
    </svg>
  );
}

/** Contentcreatie — camera met lens en speelknop. */
function ContentIllustration(props: IllustrationProps) {
  return (
    <svg {...svgBase} {...props}>
      <rect width="320" height="180" className="fill-kastanje" fillOpacity={0.1} />
      <circle cx="256" cy="50" r="28" className="fill-zonnegeel" fillOpacity={0.22} />
      <rect x="84" y="58" width="152" height="92" rx="16" className="fill-white" />
      <rect x="120" y="46" width="44" height="20" rx="8" className="fill-white" />
      <circle cx="160" cy="104" r="30" className="fill-kobalt" fillOpacity={0.12} />
      <circle cx="160" cy="104" r="22" className="fill-kobalt" />
      <circle cx="160" cy="104" r="9" className="fill-white" />
      <path d="M156 98l12 6-12 6z" className="fill-kobalt" />
      <circle cx="212" cy="78" r="5" className="fill-zonnegeel" />
      <path d="M250 110l10 6-2 13-11-5z" className="fill-kastanje" />
    </svg>
  );
}

/** Webdevelopment — browservenster met code. */
function WebIllustration(props: IllustrationProps) {
  return (
    <svg {...svgBase} {...props}>
      <rect width="320" height="180" className="fill-kobalt" fillOpacity={0.08} />
      <circle cx="58" cy="48" r="26" className="fill-zonnegeel" fillOpacity={0.2} />
      <rect x="74" y="40" width="172" height="108" rx="16" className="fill-white" />
      <rect x="74" y="40" width="172" height="26" rx="16" className="fill-kobalt" fillOpacity={0.12} />
      <circle cx="90" cy="53" r="4" className="fill-kastanje" />
      <circle cx="104" cy="53" r="4" className="fill-zonnegeel" />
      <circle cx="118" cy="53" r="4" className="fill-kobalt" />
      <path d="M132 92l-12 11 12 11" className="stroke-kobalt" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M188 92l12 11-12 11" className="stroke-kobalt" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M166 84l-12 38" className="stroke-zonnegeel" strokeWidth={7} strokeLinecap="round" />
      <rect x="214" y="120" width="22" height="22" rx="5" className="fill-zonnegeel" />
    </svg>
  );
}

/** Copywriting — document met tekstregels en pen. */
function CopyIllustration(props: IllustrationProps) {
  return (
    <svg {...svgBase} {...props}>
      <rect width="320" height="180" className="fill-zonnegeel" fillOpacity={0.14} />
      <circle cx="258" cy="132" r="30" className="fill-kobalt" fillOpacity={0.12} />
      <rect x="92" y="30" width="120" height="120" rx="14" className="fill-white" />
      <rect x="108" y="52" width="88" height="8" rx="4" className="fill-antraciet" fillOpacity={0.16} />
      <rect x="108" y="70" width="72" height="7" rx="3.5" className="fill-antraciet" fillOpacity={0.1} />
      <rect x="108" y="86" width="80" height="7" rx="3.5" className="fill-antraciet" fillOpacity={0.1} />
      <path d="M108 112c20-6 40 6 60 0" className="stroke-zonnegeel" strokeWidth={6} strokeLinecap="round" />
      <rect x="196" y="92" width="16" height="58" rx="7" transform="rotate(38 196 92)" className="fill-kobalt" />
      <path d="M214 138l9 6-2 12-10-5z" className="fill-kastanje" />
    </svg>
  );
}

/** SEO, SEA, AEO & GEO — zoekbalk, vergrootglas en stijgende cijfers. */
function SeoIllustration(props: IllustrationProps) {
  return (
    <svg {...svgBase} {...props}>
      <rect width="320" height="180" className="fill-kobalt" fillOpacity={0.08} />
      <circle cx="60" cy="54" r="26" className="fill-zonnegeel" fillOpacity={0.2} />
      <rect x="70" y="52" width="142" height="40" rx="20" className="fill-white" />
      <circle cx="96" cy="72" r="11" className="fill-none stroke-kobalt" strokeWidth={6} />
      <path d="M105 81l12 12" className="stroke-kobalt" strokeWidth={6} strokeLinecap="round" />
      <rect x="122" y="68" width="74" height="8" rx="4" className="fill-antraciet" fillOpacity={0.12} />
      <rect x="120" y="112" width="120" height="44" rx="12" className="fill-white" />
      <rect x="134" y="132" width="14" height="16" rx="3" className="fill-kobalt" fillOpacity={0.4} />
      <rect x="156" y="124" width="14" height="24" rx="3" className="fill-kobalt" />
      <rect x="178" y="118" width="14" height="30" rx="3" className="fill-zonnegeel" />
      <path d="M204 100l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" className="fill-kastanje" />
    </svg>
  );
}

/** Meta advertenties — doel met cursor en bereik. */
function AdsIllustration(props: IllustrationProps) {
  return (
    <svg {...svgBase} {...props}>
      <rect width="320" height="180" className="fill-zonnegeel" fillOpacity={0.16} />
      <circle cx="252" cy="48" r="28" className="fill-kobalt" fillOpacity={0.12} />
      <circle cx="142" cy="90" r="54" className="fill-white" />
      <circle cx="142" cy="90" r="54" className="fill-none stroke-kobalt" strokeWidth={5} strokeOpacity={0.25} />
      <circle cx="142" cy="90" r="34" className="fill-none stroke-kobalt" strokeWidth={6} />
      <circle cx="142" cy="90" r="15" className="fill-zonnegeel" />
      <circle cx="142" cy="90" r="5" className="fill-kastanje" />
      <path d="M196 116l34 12-15 6-3 16-16-34z" className="fill-kastanje" />
      <path d="M196 116l34 12-15 6-3 16-16-34z" className="fill-none stroke-white" strokeWidth={3} strokeLinejoin="round" />
    </svg>
  );
}

/** Koppelt elke dienst (via zijn icon-sleutel) aan een custom illustratie. */
export const serviceIllustrations: Record<ServiceIcon, ComponentType<IllustrationProps>> = {
  share2: SocialIllustration,
  palette: BrandingIllustration,
  camera: ContentIllustration,
  code: WebIllustration,
  penLine: CopyIllustration,
  search: SeoIllustration,
  target: AdsIllustration,
};
