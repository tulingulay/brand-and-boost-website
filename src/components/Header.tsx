import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/Logo";
import { mainNav } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  const desktopLink = ({ isActive }: { isActive: boolean }) =>
    cn(
      "rounded-full px-3.5 py-2 text-sm font-medium text-antraciet/80 transition-colors hover:bg-accent/60 hover:text-primary",
      isActive && "bg-accent/70 text-primary",
    );

  const mobileLink = ({ isActive }: { isActive: boolean }) =>
    cn(
      "rounded-xl px-4 py-3 text-lg font-medium text-antraciet transition-colors hover:bg-accent/60 hover:text-primary",
      isActive && "bg-accent/70 text-primary",
    );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between gap-4 sm:h-20">
        <Logo />

        <nav aria-label="Hoofdmenu" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <NavLink key={item.href} to={item.href} end={item.href === "/"} className={desktopLink}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/contact">Plan een gesprek</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Menu openen">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[88%] max-w-sm flex-col">
              <SheetTitle className="sr-only">Hoofdmenu</SheetTitle>
              <div className="mb-8 mt-1">
                <Logo />
              </div>
              <nav aria-label="Mobiel menu" className="flex flex-col gap-1">
                {mainNav.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <NavLink to={item.href} end={item.href === "/"} className={mobileLink}>
                      {item.label}
                    </NavLink>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <Button asChild size="lg" className="mt-6 w-full">
                  <Link to="/contact">Plan een gesprek</Link>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
