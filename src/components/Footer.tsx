import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

import { socialIcons } from "@/components/icons";
import { legalNav, mainNav, site, socials } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-antraciet text-creme">
      <div className="container py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Merk + korte zin */}
          <div className="max-w-sm">
            {/* Transparante (cream) logo-variant — leesbaar op de donkere footer. */}
            <Link
              to="/"
              className="inline-block rounded-lg"
              aria-label="Brand & Boost — naar de homepagina"
            >
              <img src="/logo-transparant.png" alt="Brand & Boost" width={150} height={36} className="h-9 w-auto" />
            </Link>
            <p className="mt-4 text-creme/75">
              Meer dan marketing, een partner in groei. Voor ambitieuze MKB-ondernemers die houden van hun vak.
            </p>

            {socials.length > 0 && (
              <ul className="mt-6 flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-creme/10 text-creme transition-colors hover:bg-kobalt hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-creme focus-visible:ring-offset-2 focus-visible:ring-offset-antraciet"
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Snelle links */}
          <nav aria-label="Footermenu">
            <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-creme/60">Pagina&apos;s</h2>
            <ul className="mt-4 space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="rounded-sm text-creme/80 transition-colors hover:text-creme focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-creme focus-visible:ring-offset-2 focus-visible:ring-offset-antraciet"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contactgegevens */}
          <div>
            <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-creme/60">Contact</h2>
            <address className="mt-4 space-y-3 not-italic text-creme/85">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-zonnegeel" aria-hidden="true" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-zonnegeel" aria-hidden="true" />
                <a
                  href={`tel:${site.phoneE164}`}
                  className="rounded-sm transition-colors hover:text-creme focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-creme focus-visible:ring-offset-2 focus-visible:ring-offset-antraciet"
                >
                  {site.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-zonnegeel" aria-hidden="true" />
                <a
                  href={`mailto:${site.email}`}
                  className="rounded-sm transition-colors hover:text-creme focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-creme focus-visible:ring-offset-2 focus-visible:ring-offset-antraciet"
                >
                  {site.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Onderbalk */}
        <div className="mt-12 flex flex-col gap-4 border-t border-creme/15 pt-6 text-sm text-creme/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. KvK {site.kvk}.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="rounded-sm transition-colors hover:text-creme focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-creme focus-visible:ring-offset-2 focus-visible:ring-offset-antraciet"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
