import { cn } from "@/lib/utils";

/** Klein stippenraster als decoratief accent (gebruikt currentColor). */
export function DecoDots({ className }: { className?: string }) {
  const dots = [];
  for (let r = 0; r < 5; r += 1) {
    for (let c = 0; c < 5; c += 1) {
      dots.push(<circle key={`${r}-${c}`} cx={6 + c * 18} cy={6 + r * 18} r="3" />);
    }
  }
  return (
    <svg
      aria-hidden="true"
      width="84"
      height="84"
      viewBox="0 0 84 84"
      fill="currentColor"
      className={cn("pointer-events-none", className)}
    >
      {dots}
    </svg>
  );
}

/** Handgetekend ogende golvende lijn, bijv. als accent onder een titel. */
export function DecoSquiggle({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      className={cn("pointer-events-none", className)}
    >
      <path d="M2 8c12-6 24-6 36 0s24 6 36 0 24-6 44 0" />
    </svg>
  );
}

/** Concentrische ringen als zacht decoratief accent. */
export function DecoRings({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("pointer-events-none", className)}
    >
      <circle cx="40" cy="40" r="12" />
      <circle cx="40" cy="40" r="24" opacity="0.6" />
      <circle cx="40" cy="40" r="36" opacity="0.3" />
    </svg>
  );
}
