import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrollt naar boven bij een paginawissel (anders blijft de scrollpositie
 * van de vorige pagina hangen). Respecteert "reduced motion" door direct
 * te springen i.p.v. te animeren.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
