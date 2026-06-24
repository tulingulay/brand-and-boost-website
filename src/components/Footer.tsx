import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

import { socialIcons } from "@/components/icons";
import { legalNav, mainNav, site, socials } from "@/data/site";

const linkClass =
  "rounded-sm text-creme/80 transition-colors hover:text-creme focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-creme focus-visible:ring-offset-2 focus-visible:ring-offset-antraciet";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t-4 border-zonnegeel bg-antraciet text-creme">
      <div className="container py-16 sm:py-20">
        <div className="grid items-center gap-12 text-center md:grid-cols-[1fr_auto_1fr] md:gap-10 md:text-left">
          {/* Pagina's (links op desktop) */}
          <nav aria-label="Footermenu" className="md:order-1 md:justify-self-start">
            <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-creme/60">Pagina&apos;s</h2>
            <ul className="mt-4 space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Groot logo in het midden */}
          <div className="order-first flex flex-col items-center md:order-2">
            {/* Transparante (cream) logo-variant, leesbaar op de donkere footer. */}
            <Link to="/" className="inline-block rounded-lg" aria-label="Brand & Boost, naar de homepagina">
              <img
                src="/logo-transparant.png"
                alt="Brand & Boost"
                width={420}
                height={101}
                className="h-16 w-auto sm:h-20 lg:h-24"
              />
            </Link>
            <p className="mt-6 max-w-xs text-center text-creme/75">
              Meer dan marketing, een partner in groei.
            </p>

            {socials.length > 0 && (
              <ul className="mt-6 flex items-center justify-center gap-3">
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

          {/* Contact (rechts op desktop) */}
          <div className="md:order-3 md:justify-self-end">
            <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-creme/60">Contact</h2>
            <address className="mt-4 space-y-3 not-italic text-creme/85">
              <p className="flex items-center justify-center gap-3 md:justify-start">
                <Mail className="h-5 w-5 shrink-0 text-zonnegeel" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className={`${linkClass} break-all`}>
                  {site.email}
                </a>
              </p>
            </address>
            <p className="mt-3 text-sm text-creme/60">We werken op afspraak.</p>
          </div>
        </div>
      </div>

      {/* Onderbalk */}
      <div className="border-t border-creme/15">
        <div className="container flex flex-col gap-4 py-6 text-center text-sm text-creme/65 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {year} {site.name}. KvK {site.kvk}.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className={linkClass}>
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
