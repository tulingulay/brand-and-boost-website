import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrollt naar boven bij een paginawissel (anders blijft de scrollpositie
 * van de vorige pagina hangen). Staat er een #anker in de URL, dan scrollt
 * hij daarnaartoe (React Router doet dat niet vanzelf); de offset onder de
 * sticky header wordt door `scroll-margin-top` op `:target` geregeld, dus
 * hier volstaat scrollIntoView. Respecteert "reduced motion" door direct
 * te springen i.p.v. te animeren.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wacht één frame zodat de doelpagina gerenderd is.
      const frame = requestAnimationFrame(() => {
        // "instant": de globale scroll-behavior:smooth kan bij een lange
        // sprong door de paginawissel onderbroken worden en halverwege
        // blijven hangen; direct springen is hier betrouwbaarder.
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "instant" });
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
