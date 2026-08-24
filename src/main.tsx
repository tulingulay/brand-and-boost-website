import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { initAnalytics } from "@/lib/analytics";
import { applyReducedMotionClass } from "@/lib/motion";

// Self-hosted fonts (voorheen Google Fonts): Bricolage Grotesque als
// variabele as voor de koppen, Montserrat in de vier gebruikte gewichten.
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

import "./index.css";

// Stuur de reduced-motion-class op <html> (respecteert de voorkeur in productie,
// maar laat animaties spelen in de dev-preview).
applyReducedMotionClass();
window
  .matchMedia("(prefers-reduced-motion: reduce)")
  .addEventListener("change", applyReducedMotionClass);

// GA4 + Consent Mode (no-op zolang VITE_GA4_ID niet gezet is).
initAnalytics();

const root = document.getElementById("root")!;

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// Productie serveert geprerenderde HTML (zie scripts/prerender.mjs): dan
// hydrateren we die. De dev-server heeft een lege root en rendert vers.
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
