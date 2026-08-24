import * as React from "react";
import { useEffect, useRef, useState } from "react";

import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type RevealDirection = "up" | "down" | "left" | "right" | "zoom";

const hiddenByDirection: Record<RevealDirection, string> = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "-translate-x-10",
  right: "translate-x-10",
  zoom: "scale-95",
};

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Vertraging in ms voor een trapsgewijs (cascade) effect. */
  delay?: number;
  /** Richting waaruit het element in beeld komt. */
  direction?: RevealDirection;
}

/**
 * Laat content vloeiend in beeld komen zodra die in zicht scrolt: fade +
 * beweging vanuit de gekozen richting, met een zachte easing.
 *
 * SSR-veilig ontworpen: de begintoestand is ZICHTBAAR, zodat de
 * geprerenderde HTML (en dus crawlers, social previews en bezoekers zonder
 * JS) alle content gewoon bevat en server en client identiek renderen. Pas
 * ná het mounten verbergen we uitsluitend elementen die op dat moment onder
 * de viewport staan; die spelen de scroll-animatie zoals voorheen. Content
 * boven de vouw verschijnt dus direct, wat ook de LCP verbetert.
 *
 * Respecteert `prefers-reduced-motion`: dan blijft alles direct zichtbaar.
 */
export function Reveal({ children, className, delay = 0, direction = "up", style, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    // Alleen elementen die volledig onder de viewport beginnen doen mee aan
    // de scroll-animatie; wat (deels) in beeld staat blijft gewoon staan.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setHidden(true);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHidden(false);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        hidden
          ? cn("opacity-0", hiddenByDirection[direction])
          : "translate-x-0 translate-y-0 scale-100 opacity-100",
        className,
      )}
      style={{ transitionDelay: hidden ? "0ms" : `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
