import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Pagina niet gevonden · Brand & Boost"
        description="Deze pagina bestaat niet (meer)."
        path="/404"
        noindex
      />

      <section className="bg-creme">
        <div className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
          <p className="font-heading text-7xl font-bold text-kobalt sm:text-8xl">404</p>
          <h1 className="mt-4 text-h2">Deze pagina konden wij niet vinden.</h1>
          <p className="mt-4 max-w-md text-lead text-muted-foreground">
            Misschien is de link verouderd of klopt het adres net niet. Geen zorgen, wij helpen je weer op weg.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="h-5 w-5" aria-hidden="true" />
                Naar de homepagina
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">
                Plan een strategiegesprek
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
