import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { applyReducedMotionClass } from "@/lib/motion";
import "./index.css";

// Stuur de reduced-motion-class op <html> (respecteert de voorkeur in productie,
// maar laat animaties spelen in de dev-preview).
applyReducedMotionClass();
window
  .matchMedia("(prefers-reduced-motion: reduce)")
  .addEventListener("change", applyReducedMotionClass);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
