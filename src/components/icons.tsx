import { Facebook, Instagram, Linkedin, type LucideIcon } from "lucide-react";

import type { SocialIcon } from "@/data/site";

/** Koppelt de social links aan een Lucide-icoon (herkenbare merklogo's). */
export const socialIcons: Record<SocialIcon, LucideIcon> = {
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
};
