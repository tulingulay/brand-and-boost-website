import * as React from "react";

interface LegalContentProps {
  /** Datum van de laatste update, bijv. "26 juni 2026" (optioneel). */
  updated?: string;
  children: React.ReactNode;
}

/**
 * Leesbare wrapper voor juridische pagina's (AV, privacy, cookies). Houdt de
 * tekst op een prettige leesbreedte en past via de `.legal`-class (zie
 * index.css) consistente typografie toe op koppen, alinea's en lijsten.
 */
export function LegalContent({ updated, children }: LegalContentProps) {
  return (
    <div className="mx-auto max-w-3xl">
      {updated && <p className="mb-10 text-sm text-muted-foreground">Laatst geüpdatet: {updated}</p>}
      <div className="legal">{children}</div>
    </div>
  );
}
