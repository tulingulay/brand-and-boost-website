import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { KennismakenBadge } from "@/components/KennismakenBadge";
import { ScrollToTop } from "@/components/ScrollToTop";
import { OrganizationJsonLd } from "@/components/StructuredData";

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Direct naar de inhoud
      </a>

      <OrganizationJsonLd />
      <ScrollToTop />
      <Header />

      <main id="main" className="flex-1">
        {/* Suspense-grens voor de lazy routes (juridisch + bedankt). */}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />

      <KennismakenBadge />
      <CookieConsent />
    </div>
  );
}
