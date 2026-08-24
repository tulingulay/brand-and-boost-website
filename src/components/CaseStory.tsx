import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { PortfolioFlipCard } from "@/components/PortfolioFlipCards";
import { Reveal } from "@/components/Reveal";
import type { CaseItem } from "@/data/cases";
import { reviews } from "@/data/reviews";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

interface CaseStoryProps {
  item: CaseItem;
  /** Even/oneven bepaalt de afwisselende links/rechts-compositie. */
  index: number;
  /**
   * Toon de gekoppelde klantquote bij de case. Op /portfolio staat de
   * volledige reviewsectie er al onder, dus daar laten we hem uit.
   */
  showReview?: boolean;
}

/**
 * Eén casusblok: flip-card met het werk, plus de vraag / onze boost / het
 * resultaat. Optioneel verrijkt met echte cijfers (`metrics`), de ingezette
 * diensten, een live-link naar het opgeleverde werk en de klantquote.
 * Alles data-gedreven vanuit cases.ts: ontbreekt een veld, dan verschijnt
 * dat onderdeel simpelweg niet.
 */
export function CaseStory({ item, index, showReview = false }: CaseStoryProps) {
  const usedServices = (item.serviceIds ?? [])
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));
  const review = showReview && item.reviewName ? reviews.find((r) => r.name === item.reviewName) : undefined;

  return (
    <Reveal>
      <article className="grid grid-cols-12 items-start gap-x-8 gap-y-6">
        <div className={cn("col-span-12 lg:col-span-6", index % 2 === 1 && "lg:order-2 lg:col-start-7")}>
          <PortfolioFlipCard item={item} />

          {item.liveUrl && (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/live mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-[6px] hover:underline"
            >
              Bekijk het live
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          )}
        </div>

        <div className={cn("col-span-12 lg:col-span-5", index % 2 === 1 ? "lg:order-1" : "lg:col-start-8")}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kobalt">{item.client}</p>
          <h3 className="mt-3 font-heading text-2xl font-bold text-antraciet sm:text-3xl">{item.title}</h3>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-antraciet/70">De vraag</p>
              <p className="mt-1.5 text-muted-foreground">{item.challenge}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-antraciet/70">Onze boost</p>
              <p className="mt-1.5 text-muted-foreground">{item.approach}</p>
            </div>
            <div className="border-t-2 border-zonnegeel pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-antraciet/70">Het resultaat</p>
              <p className="mt-1.5 font-heading text-lg font-semibold text-kobalt">{item.result}</p>
            </div>

            {(item.metrics?.length ?? 0) > 0 && (
              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 pt-1 sm:grid-cols-3">
                {item.metrics!.map((metric) => (
                  <div key={metric.label} className="border-t-2 border-zonnegeel pt-3">
                    <dd className="font-heading text-3xl font-bold text-kobalt">{metric.value}</dd>
                    <dt className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-antraciet/70">
                      {metric.label}
                    </dt>
                  </div>
                ))}
              </dl>
            )}

            {review && (
              <figure className="border-l-2 border-kobalt pl-4">
                <blockquote className="text-sm italic leading-relaxed text-muted-foreground">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-antraciet/70">
                  {review.name} · {review.company}
                </figcaption>
              </figure>
            )}

            {usedServices.length > 0 && (
              <p className="text-sm text-muted-foreground">
                Ingezet:{" "}
                {usedServices.map((service, i) => (
                  <span key={service.slug}>
                    {i > 0 && " · "}
                    <Link
                      to={`/diensten/${service.slug}`}
                      className="font-semibold text-primary underline-offset-2 hover:underline"
                    >
                      {service.title}
                    </Link>
                  </span>
                ))}
              </p>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
