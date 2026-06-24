import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Custom iconenset voor Brand & Boost — bewust net even anders dan een
 * standaard icoonbibliotheek, met een geometrische, energieke stijl. Gebruikt
 * voor de kernwaarden, de diensten en de merkbelofte. Alles tekent met
 * `currentColor`.
 */

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/* ===== Kernwaarden ===== */

/** Energie — dubbele sparkle. */
export function EnergieIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M10.5 2.5l1.7 5.6 5.6 1.7-5.6 1.7-1.7 5.6-1.7-5.6-5.6-1.7 5.6-1.7z" />
      <path d="M18.5 14.5l.7 2.4 2.4.7-2.4.7-.7 2.4-.7-2.4-2.4-.7 2.4-.7z" />
    </svg>
  );
}

/** Partnerschap — twee verstrengelde ringen. */
export function PartnerschapIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="8.5" cy="12" r="5.5" />
      <circle cx="15.5" cy="12" r="5.5" />
    </svg>
  );
}

/** Resultaatgericht — oplopende lijn met pijl. */
export function ResultaatIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="3.5" cy="16.5" r="1.3" fill="currentColor" stroke="none" />
      <path d="M3.5 16.5l5-5 3.5 3.5L20.5 6.5" />
      <path d="M15 6.5h5.5V12" />
    </svg>
  );
}

/** Transparant — geslepen edelsteen (helderheid). */
export function TransparantIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7.5 6L12 21 4.5 9z" />
      <path d="M4.5 9h15" />
      <path d="M9 9l3 12 3-12" />
    </svg>
  );
}

/* ===== Diensten ===== */

/** Social media management — verbonden netwerk. */
export function SocialIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="5" cy="6" r="1.9" />
      <circle cx="19" cy="6.5" r="1.9" />
      <circle cx="12.5" cy="20" r="1.9" />
      <path d="M10.1 10.6 6.6 7.4M13.9 10.6 17.4 8M12.2 14.4l.2 3.7" />
    </svg>
  );
}

/** Branding — verfdruppel met glans. */
export function BrandingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c3.2 3.8 5.2 6.4 5.2 9.2a5.2 5.2 0 0 1-10.4 0C6.8 9.4 8.8 6.8 12 3z" />
      <path d="M12 10.4l.6 1.8 1.8.6-1.8.6-.6 1.8-.6-1.8-1.8-.6 1.8-.6z" />
    </svg>
  );
}

/** Contentcreatie — beeldframe met lens. */
export function ContentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="3" />
      <circle cx="12" cy="12" r="3.1" />
      <circle cx="17" cy="9" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Webdevelopment — browservenster met code. */
export function WebIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4.5" width="18" height="15" rx="3" />
      <path d="M3 8.5h18" />
      <path d="M9.5 12 8 13.5l1.5 1.5M14.5 12 16 13.5 14.5 15M12.7 11l-1.4 5" />
    </svg>
  );
}

/** Copywriting — tekstregels met pen. */
export function CopyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h9M4 11.5h6" />
      <path d="M13.5 15.6 19 10.1l2.2 2.2-5.5 5.5-3 .8z" />
    </svg>
  );
}

/** SEO/SEA/AEO & GEO — vergrootglas met spark. */
export function SeoIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.6-3.6" />
      <path d="M11 8.3l.5 1.7 1.7.5-1.7.5-.5 1.7-.5-1.7-1.7-.5 1.7-.5z" />
    </svg>
  );
}

/** Meta advertenties — vizier op doel. */
export function AdsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      <path d="M12 4V2M20 12h2M12 20v2M4 12H2" />
    </svg>
  );
}

/* ===== Merkbelofte ===== */

/** Persoonlijke, energieke aandacht — hart. */
export function AandachtIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20.5C6.5 16.5 4 13.2 4 9.8A3.8 3.8 0 0 1 12 7a3.8 3.8 0 0 1 8 2.8c0 3.4-2.5 6.7-8 10.7z" />
    </svg>
  );
}

/** Data-gedreven — meter. */
export function DataIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 17a8 8 0 0 1 16 0" />
      <path d="M12 17l4.5-3.5" />
      <circle cx="12" cy="17" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Eén aanspreekpunt — gesprek met vinkje. */
export function ContactIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.5h16v10H10l-4 3.5V15.5H4z" />
      <path d="M9 10l2 2 4-4" />
    </svg>
  );
}

/* ===== Proces ===== */

/** Strategie en plan — klembord met plan. */
export function PlanIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="4" width="14" height="17" rx="2.5" />
      <path d="M9.2 4V3.4A1.4 1.4 0 0 1 10.6 2h2.8a1.4 1.4 0 0 1 1.4 1.4V4z" />
      <path d="M8.5 11l1.6 1.6L13.5 9" />
      <path d="M9 15.5h6" />
    </svg>
  );
}

/** Uitvoering — raket (aan de slag). */
export function BouwIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5c2.4 1.7 3.8 4.2 3.8 7 0 1.9-.8 3.4-1.8 4.5H10c-1-1.1-1.8-2.6-1.8-4.5 0-2.8 1.4-5.3 3.8-7z" />
      <circle cx="12" cy="9" r="1.4" />
      <path d="M10 14l-1.8 3.6M14 14l1.8 3.6M12 16.5v3" />
    </svg>
  );
}

/* ===== Missie & visie ===== */

/** Missie — kompas (richting). */
export function MissieIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2.2 4.8L8 16l2.2-4.8z" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Visie — oog (vooruitkijken). */
export function VisieIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 12s3.6-6 9.5-6 9.5 6 9.5 6-3.6 6-9.5 6-9.5-6-9.5-6z" />
      <circle cx="12" cy="12" r="2.8" />
    </svg>
  );
}
