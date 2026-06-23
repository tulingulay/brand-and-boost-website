import * as React from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Vertraging in ms voor een subtiel trapsgewijs effect. */
  delay?: number;
}

/**
 * Laat content zacht in beeld faden/sliden zodra die in zicht komt.
 * Respecteert `prefers-reduced-motion`: dan verschijnt alles direct,
 * zonder beweging.
 */
export function Reveal({ children, className, delay = 0, style, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms", ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
