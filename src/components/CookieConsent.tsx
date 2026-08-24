import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { applyConsent, CONSENT_STORAGE_KEY, type ConsentValue } from "@/lib/analytics";

/**
 * Cookiemelding die als kaartje vanuit de hoek verschijnt zodra iemand nog geen
 * keuze heeft gemaakt. Bij "Akkoord" mogen analytische cookies (Google
 * Analytics) geplaatst worden; bij "Weigeren" alleen functionele opslag. De
 * keuze wordt onthouden in localStorage en direct doorgegeven aan Consent
 * Mode (zie src/lib/analytics.ts).
 *
 * Herzien kan via de "Cookievoorkeuren"-knop in de footer, die dit event
 * afvuurt om de melding opnieuw te openen.
 */
export const OPEN_COOKIE_CONSENT_EVENT = "bb-open-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage geblokkeerd (privémodus): toon de melding dan gewoon.
      setVisible(true);
    }
  }, []);

  // Heropenen vanuit de footer ("Cookievoorkeuren").
  useEffect(() => {
    const open = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_CONSENT_EVENT, open);
    return () => window.removeEventListener(OPEN_COOKIE_CONSENT_EVENT, open);
  }, []);

  function choose(value: ConsentValue) {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify({ value, date: new Date().toISOString() }));
    } catch {
      // Geen opslag mogelijk: melding alsnog sluiten voor deze sessie.
    }
    applyConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookiemelding"
      className="fixed bottom-4 left-4 right-4 z-40 sm:left-6 sm:right-auto sm:max-w-lg"
    >
      <div className="max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-editorial border border-antraciet/15 bg-white p-5 shadow-[0_18px_50px_-18px_rgba(20,24,40,0.4)] sm:p-6">
        <p className="font-heading text-base font-bold text-antraciet">Wij maken gebruik van cookies</p>

        <div className="mt-2 space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            Wij gebruiken functionele cookies om deze website goed te laten werken. Klik je op Akkoord, dan gebruiken
            wij daarnaast analytische cookies (Google Analytics, privacyvriendelijk ingesteld) om te meten hoe de
            website wordt gebruikt. Weiger je, dan meten wij niets; de website werkt dan gewoon.
          </p>
          <p>
            Zie voor meer informatie onze{" "}
            <Link
              to="/privacyverklaring"
              className="font-semibold text-kobalt underline-offset-2 hover:underline"
              onClick={() => setVisible(false)}
            >
              privacy-
            </Link>{" "}
            en{" "}
            <Link
              to="/cookiebeleid"
              className="font-semibold text-kobalt underline-offset-2 hover:underline"
              onClick={() => setVisible(false)}
            >
              cookieverklaring
            </Link>
            .
          </p>
        </div>

        <div className="mt-5 flex items-center gap-4">
          <Button size="sm" onClick={() => choose("accepted")}>
            Akkoord
          </Button>
          <Button
            size="sm"
            variant="link"
            className="h-auto px-0 text-antraciet"
            onClick={() => choose("rejected")}
          >
            Weigeren
          </Button>
        </div>
      </div>
    </div>
  );
}
