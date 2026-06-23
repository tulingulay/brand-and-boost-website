import {
  Camera,
  Code,
  Facebook,
  Instagram,
  Linkedin,
  type LucideIcon,
  Palette,
  PenLine,
  Search,
  Share2,
  Target,
} from "lucide-react";

import type { ServiceIcon } from "@/data/services";
import type { SocialIcon } from "@/data/site";

/** Koppelt de diensten aan een Lucide-icoon. */
export const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  share2: Share2,
  palette: Palette,
  camera: Camera,
  code: Code,
  penLine: PenLine,
  search: Search,
  target: Target,
};

/** Koppelt de social links aan een Lucide-icoon. */
export const socialIcons: Record<SocialIcon, LucideIcon> = {
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
};
