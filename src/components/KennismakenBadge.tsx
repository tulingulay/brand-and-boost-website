import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { prefersReducedMotion } from "@/lib/motion";

/**
 * Zwevende ronde "Kennismaken?"-badge rechtsonder. De cirkeltekst draait mee
 * terwijl je scrolt (respecteert reduced-motion: dan staat hij stil). Linkt
 * naar de contactpagina; verbergt zichzelf op de contactpagina zelf.
 */
export function KennismakenBadge() {
  const ringRef = useRef<SVGSVGElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      if (ringRef.current) {
        ringRef.current.style.transform = `rotate(${window.scrollY * 0.12}deg)`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  if (pathname === "/contact") return null;

  return (
    <Link
      to="/contact"
      aria-label="Kennismaken? Neem contact op."
      className="group fixed bottom-6 right-6 z-30 hidden h-28 w-28 items-center justify-center rounded-full bg-zonnegeel text-antraciet transition-transform duration-300 hover:scale-110 hover:-rotate-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kobalt focus-visible:ring-offset-2 focus-visible:ring-offset-background md:flex lg:h-32 lg:w-32"
    >
      <svg ref={ringRef} aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <path id="kennismaken-pad" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-antraciet font-heading text-[11px] font-bold uppercase tracking-[0.16em]">
          <textPath href="#kennismaken-pad" startOffset="0">
            Kennismaken? • Kennismaken? •
          </textPath>
        </text>
      </svg>

      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-kobalt text-creme ring-4 ring-zonnegeel transition-transform duration-300 group-hover:rotate-[18deg] lg:h-16 lg:w-16">
        <ArrowUpRight className="h-7 w-7" aria-hidden="true" />
      </span>
    </Link>
  );
}
