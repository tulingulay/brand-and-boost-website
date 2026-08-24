import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { services } from "@/data/services";
import { mainNav } from "@/data/site";
import { cn } from "@/lib/utils";

type NavLinkClass = (props: { isActive: boolean }) => string;

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Sluit het menu bij een paginawissel.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Sluit met Escape zolang het menu open is.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const desktopLink = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative px-3 py-2 text-sm font-medium text-antraciet/80 transition-colors hover:text-primary",
      "after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-zonnegeel after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100",
      isActive && "text-primary after:scale-x-100",
    );

  const mobileLink = ({ isActive }: { isActive: boolean }) =>
    cn(
      "rounded-xl px-4 py-3 text-lg font-medium text-antraciet transition-colors hover:bg-accent/60 hover:text-primary",
      isActive && "bg-accent/70 text-primary",
    );

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="container flex h-16 items-center justify-between gap-4 sm:h-20">
          <Logo />

          <nav aria-label="Hoofdmenu" className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) =>
              item.href === "/diensten" ? (
                <ServicesNavItem key={item.href} linkClassName={desktopLink} />
              ) : (
                <NavLink key={item.href} to={item.href} end={item.href === "/"} className={desktopLink}>
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Altijd zichtbaar, ook op mobiel: onder 640px met kort label
                zodat logo, knop en menuknop samen op 320px passen. */}
            <Button asChild>
              <Link to="/contact">
                <span className="sm:hidden">Kennismaken</span>
                <span className="hidden sm:inline">Neem contact op</span>
              </Link>
            </Button>

            {/* Menuknop: de "O" uit het logo, met een pijl naar beneden die
                180° roteert (naar boven) zodra het menu opent. */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobiel-menu"
              aria-label={open ? "Menu sluiten" : "Menu openen"}
              className={cn(
                "group relative inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-kobalt bg-background transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden",
                open && "bg-kobalt hover:bg-kobalt/90",
              )}
            >
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-kobalt transition-transform duration-300 ease-out group-hover:translate-y-0.5",
                  open && "rotate-180 text-white group-hover:translate-y-0",
                )}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* Slide-down menu, opent onder de header. */}
        <div
          id="mobiel-menu"
          className={cn(
            "absolute inset-x-0 top-full z-40 origin-top border-b border-border bg-background shadow-soft-lg transition-all duration-300 ease-out lg:hidden",
            open ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-3 opacity-0",
          )}
        >
          <nav aria-label="Mobiel menu" className="container flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                onClick={() => setOpen(false)}
                className={mobileLink}
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild size="lg" className="mt-3 w-full" onClick={() => setOpen(false)}>
              <Link to="/contact">Neem contact op</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Scrim achter het menu (klik om te sluiten). */}
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-x-0 bottom-0 top-16 z-30 bg-antraciet/30 backdrop-blur-sm transition-opacity duration-300 sm:top-20 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
    </>
  );
}

/**
 * "Diensten" in de desktopnavigatie met een hover/focus-dropdown die alle
 * diensten toont en direct naar de detailpagina's linkt. Opent op hover én
 * bij toetsenbordfocus (group-focus-within), zodat het ook toegankelijk is.
 */
function ServicesNavItem({ linkClassName }: { linkClassName: NavLinkClass }) {
  return (
    <div className="group relative">
      <NavLink to="/diensten" className={linkClassName} aria-haspopup="true">
        Diensten
      </NavLink>

      <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div className="w-64 rounded-2xl border bg-card p-2 shadow-soft-lg">
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <NavLink
                  to={`/diensten/${service.slug}`}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-antraciet transition-colors hover:bg-accent hover:text-primary focus-visible:bg-accent focus-visible:text-primary focus-visible:outline-none"
                >
                  {service.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="my-1 border-t border-border" aria-hidden="true" />
          <NavLink
            to="/diensten"
            className="flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent"
          >
            Alle diensten bekijken
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
