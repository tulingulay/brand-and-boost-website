import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

/**
 * Cookiemelding die als kaartje vanuit de hoek verschijnt zodra iemand nog geen
 * keuze heeft gemaakt. Bij "Akkoord" worden (in de toekomst) ook advertentie-
 * en trackingcookies geplaatst; bij "Weigeren" alleen functionele/analytische.
 * De keuze wordt onthouden in localStorage zodat de melding daarna verdwijnt.
 */
const STORAGE_KEY = "bb-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage geblokkeerd (privémodus): toon de melding dan gewoon.
      setVisible(true);
    }
  }, []);

  function choose(value: "accepted" | "rejected") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, date: new Date().toISOString() }));
    } catch {
      // Geen opslag mogelijk: melding alsnog sluiten voor deze sessie.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookiemelding"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 z-40 sm:left-6 sm:right-auto sm:max-w-lg"
    >
      <div className="max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-[3px] border border-antraciet/15 bg-white p-5 shadow-[0_18px_50px_-18px_rgba(20,24,40,0.4)] sm:p-6">
        <p className="font-heading text-base font-bold text-antraciet">Wij maken gebruik van cookies</p>

        <div className="mt-2 space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            Op deze website gebruiken wij cookies en vergelijkbare technieken om de website goed te laten werken en om te
            analyseren hoe de website wordt gebruikt.
          </p>
          <p>
            Als je op Akkoord klikt, plaatsen we ook cookies voor advertentiepersonalisatie en tracking. Hiermee kunnen
            wij en derden (zoals Google en onze advertentiepartners) advertenties relevanter maken. Wil je dit liever
            niet, dan kun je natuurlijk ook weigeren. Niet-gepersonaliseerde advertenties kunnen dan nog steeds worden
            weergegeven.
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
            </Link>{" "}
            en lees hoe Google jouw gegevens verwerkt wanneer je akkoord geeft.
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
