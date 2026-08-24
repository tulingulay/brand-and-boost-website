import { PassThrough } from "node:stream";

import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";

import App from "./App";
import { prerenderRoutes } from "./routes";

export { prerenderRoutes };

/**
 * Server-side render van één route, gebruikt door scripts/prerender.mjs om
 * bij de build statische HTML per pagina te schrijven.
 *
 * Regels voor SSR-veiligheid (geldt voor elke nieuwe component):
 * geen `window`, `document` of `localStorage` buiten useEffect, en de
 * eerste render moet op server en client identiek zijn (zie Reveal.tsx en
 * CookieConsent.tsx als voorbeelden).
 *
 * We renderen met `renderToPipeableStream` + `onAllReady` in plaats van
 * `renderToString`: dan komen ook eventuele React.lazy/Suspense-routes
 * volledig uitgerenderd in de HTML in plaats van als fallback.
 */
export function render(url: string): Promise<{ html: string; helmet: HelmetServerState }> {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const app = (
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

  return new Promise((resolve, reject) => {
    const stream = renderToPipeableStream(app, {
      onAllReady() {
        const passthrough = new PassThrough();
        const chunks: Buffer[] = [];
        passthrough.on("data", (chunk: Buffer) => chunks.push(chunk));
        passthrough.on("end", () => {
          resolve({
            html: Buffer.concat(chunks).toString("utf8"),
            helmet: helmetContext.helmet!,
          });
        });
        stream.pipe(passthrough);
      },
      onError(error) {
        reject(error);
      },
    });
  });
}
