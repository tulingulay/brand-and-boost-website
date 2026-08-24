import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { site } from "@/data/site";

interface PrimaryCtaButtonProps {
  label?: string;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  className?: string;
}

/**
 * De primaire conversieknop. Zolang er geen agenda-tool is gekoppeld wijst
 * hij naar het contactformulier; zodra `site.schedulingUrl` gevuld is
 * (Calendly/Cal.com) wordt het automatisch een externe agenda-link. Zo is
 * die overstap later één regel in src/data/site.ts.
 */
export function PrimaryCtaButton({
  label = "Plan een strategiegesprek",
  size = "lg",
  variant,
  className,
}: PrimaryCtaButtonProps) {
  const inner = (
    <>
      {label}
      <ArrowRight className="h-5 w-5" aria-hidden="true" />
    </>
  );

  return (
    <Button asChild size={size} variant={variant} className={className}>
      {site.schedulingUrl ? (
        <a href={site.schedulingUrl} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : (
        <Link to="/contact">{inner}</Link>
      )}
    </Button>
  );
}
