import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Hoogte-klasse(n) voor het beeld. */
  imgClassName?: string;
}

/**
 * Logo (kobalt wordmark met creme pijl-in-de-O) voor lichte achtergronden
 * (header + mobiel menu). Linkt naar de homepagina. De hoogte is gereserveerd
 * zodat de layout niet verspringt. Voor donkere achtergronden (footer)
 * gebruiken wij de transparante cream-variant, zie Footer.tsx.
 */
export function Logo({ className, imgClassName }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="Brand & Boost, naar de homepagina"
      className={cn("inline-flex items-center rounded-lg", className)}
    >
      <img
        src="/logo-blue.png"
        alt="Brand & Boost"
        width={184}
        height={44}
        className={cn("h-9 w-auto sm:h-11", imgClassName)}
      />
    </Link>
  );
}
