import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Combineert classnames en lost Tailwind-conflicten netjes op. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
