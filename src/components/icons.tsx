import { Facebook, Instagram, Linkedin, type LucideIcon } from "lucide-react";

import {
  AdsIcon,
  BrandingIcon,
  ContentIcon,
  CopyIcon,
  SeoIcon,
  SocialIcon as SocialMediaIcon,
  WebIcon,
} from "@/components/BrandIcons";
import type { ServiceIcon } from "@/data/services";
import type { SocialIcon } from "@/data/site";
import type { IconComponent } from "@/data/values";

/** Koppelt de diensten aan een custom (Brand & Boost) icoon. */
export const serviceIcons: Record<ServiceIcon, IconComponent> = {
  share2: SocialMediaIcon,
  palette: BrandingIcon,
  camera: ContentIcon,
  code: WebIcon,
  penLine: CopyIcon,
  search: SeoIcon,
  target: AdsIcon,
};

/** Koppelt de social links aan een Lucide-icoon (herkenbare merklogo's). */
export const socialIcons: Record<SocialIcon, LucideIcon> = {
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
};
