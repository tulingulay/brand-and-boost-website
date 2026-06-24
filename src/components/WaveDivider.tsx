import { cn } from "@/lib/utils";

/** Zachte golfvorm voor de sectie-overgangen (viewBox 0 0 1440 100). */
export const WAVE_PATH = "M0,56 C240,28 480,28 720,52 C960,76 1200,76 1440,48 L1440,100 L0,100 Z";

interface WaveDividerProps {
  /** Achtergrondkleur = de sectie erboven (bijv. "bg-creme" of "bg-white"). */
  topClass?: string;
  /** Vulkleur van de golf = de sectie eronder (bijv. "fill-white" of "fill-creme"). */
  fillClass?: string;
  /** Spiegel de golf horizontaal voor afwisseling tussen overgangen. */
  flip?: boolean;
  className?: string;
}

/**
 * Golvende overgang tussen twee secties. Plaats het tussen twee <section>'s:
 * de achtergrond (`topClass`) sluit aan op de sectie erboven, de golfvulling
 * (`fillClass`) op de sectie eronder.
 */
export function WaveDivider({
  topClass = "bg-creme",
  fillClass = "fill-white",
  flip = false,
  className,
}: WaveDividerProps) {
  return (
    <div aria-hidden="true" className={cn("relative -mb-px h-10 w-full sm:h-14 lg:h-16", topClass, className)}>
      <svg
        className={cn("absolute inset-0 h-full w-full", fillClass, flip && "-scale-x-100")}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path d={WAVE_PATH} />
      </svg>
    </div>
  );
}
