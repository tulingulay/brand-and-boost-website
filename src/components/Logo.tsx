import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Hoogte-klasse(n) voor het beeld. */
  imgClassName?: string;
}

/**
 * Logo (kobalt-versie) voor lichte achtergronden (header + mobiel menu).
 * Linkt naar de homepagina. De hoogte is gereserveerd zodat de layout niet
 * verspringt. Voor donkere achtergronden (footer) gebruiken we de transparante
 * variant — zie Footer.tsx.
 */
export function Logo({ className, imgClassName }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="Brand & Boost — naar de homepagina"
      className={cn("inline-flex items-center rounded-lg", className)}
    >
      <img
        src="/logo.png"
        alt="Brand & Boost"
        width={167}
        height={40}
        className={cn("h-9 w-auto rounded-lg sm:h-10", imgClassName)}
      />
    </Link>
  );
}
