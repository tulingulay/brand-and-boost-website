import { Link } from "react-router-dom";

import { socialIcons } from "@/components/icons";
import { legalNav, mainNav, site, socials } from "@/data/site";

const navLink =
  "rounded-sm text-creme/75 transition-colors hover:text-creme focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-creme focus-visible:ring-offset-2 focus-visible:ring-offset-antraciet";
const kicker = "text-xs font-semibold uppercase tracking-[0.2em] text-creme/45";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-antraciet text-creme">
      <div className="container py-section-sm">
        {/* Merkstatement + contact */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 border-b border-creme/15 pb-14">
          <div className="col-span-12 lg:col-span-7">
            <Link to="/" className="inline-block rounded-lg" aria-label="Brand & Boost, naar de homepagina">
              <img src="/logo-transparant.png" alt="Brand & Boost" width={420} height={101} className="h-16 w-auto sm:h-20" />
            </Link>
            <p className="mt-7 max-w-[15ch] font-heading text-h2 font-bold text-creme">
              Meer dan marketing, een partner in groei.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className={kicker}>Contact</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block break-all font-heading text-xl font-bold text-creme underline-offset-[6px] transition-colors hover:text-zonnegeel hover:underline"
            >
              {site.email}
            </a>
            <p className="mt-2 text-sm text-creme/60">We werken op afspraak.</p>
          </div>
        </div>

        {/* Kolommen */}
        <div className="mt-12 grid grid-cols-12 gap-x-8 gap-y-10">
          <nav aria-label="Footermenu" className="col-span-6 lg:col-span-3">
            <p className={kicker}>Pagina&apos;s</p>
            <ul className="mt-4 space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className={navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {socials.length > 0 && (
            <div className="col-span-6 lg:col-span-3">
              <p className={kicker}>Volg ons</p>
              <ul className="mt-4 flex items-center gap-5">
                {socials.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="inline-flex text-creme/75 transition-colors hover:text-zonnegeel"
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Onderbalk */}
      <div className="border-t border-creme/15">
        <div className="container flex flex-col gap-3 py-6 text-xs uppercase tracking-[0.12em] text-creme/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} · KvK {site.kvk}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className={navLink}>
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
