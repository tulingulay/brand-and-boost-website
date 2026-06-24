import { useEffect, useRef } from "react";

import { processSteps } from "@/data/process";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * De processtappen als tekstvakken, onder elkaar gestapeld. Terwijl je door de
 * sectie scrolt, vervagen de vakken naarmate ze van het midden van het scherm
 * af bewegen (opacity + lichte blur), zodat ze "in elkaar weg vagen". Het vak
 * in het midden is het scherpst. Respecteert `prefers-reduced-motion`: dan
 * blijven alle vakken gewoon staan.
 */
export function ProcessSteps() {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const center = vh / 2;
      const fadeRange = vh * 0.5; // afstand vanaf het midden waarover een vak vervaagt

      itemRefs.current.forEach((li) => {
        if (!li) return;
        const inner = li.firstElementChild as HTMLElement | null;
        if (!inner) return;

        const rect = li.getBoundingClientRect();
        const boxCenter = rect.top + rect.height / 2;
        const dist = Math.abs(boxCenter - center);
        let f = 1 - dist / fadeRange; // 1 in het midden, 0 ver weg
        f = Math.min(1, Math.max(0, f));

        const ty = (1 - f) * (boxCenter < center ? -24 : 24); // subtiel naar het midden toe
        inner.style.opacity = String(0.1 + 0.9 * f);
        inner.style.transform = `translateY(${ty}px) scale(${0.94 + 0.06 * f})`;
        inner.style.filter = f > 0.98 ? "none" : `blur(${(1 - f) * 4}px)`;
      });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <ol className="mx-auto mt-12 flex max-w-2xl flex-col gap-5">
      {processSteps.map((step, index) => (
        <li
          key={step.number}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
        >
          <div className="will-change-transform">
            <div className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-soft-lg sm:gap-7 sm:p-8">
              <span className="font-heading text-4xl font-bold leading-none text-zonnegeel sm:text-5xl">
                {step.number}
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold text-antraciet">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
