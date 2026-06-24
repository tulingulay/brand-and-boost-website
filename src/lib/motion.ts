/**
 * Toegankelijkheid: respecteer `prefers-reduced-motion`.
 *
 * Uitzondering: tijdens lokaal previewen (de Vite dev-server) forceren we de
 * animaties AAN, zodat je het ontwerp en de bewegingen kunt beoordelen - ook
 * als je systeem "verminder beweging" aan heeft staan. In de productie-build
 * (zoals op de live site) blijft de voorkeur van de bezoeker leidend.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  if (import.meta.env.DEV) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Zet of haalt de `reduce-motion`-class op <html>. Die class stuurt de
 * CSS-animaties (zie src/index.css) zodat ze in productie netjes stoppen bij
 * "verminder beweging", maar in de dev-preview gewoon spelen.
 */
export function applyReducedMotionClass(): void {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("reduce-motion", prefersReducedMotion());
}
