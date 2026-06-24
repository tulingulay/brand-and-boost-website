import {
  AtSign,
  BarChart3,
  Camera,
  Code,
  Globe,
  Hash,
  Heart,
  Lightbulb,
  type LucideIcon,
  Mail,
  Megaphone,
  MousePointerClick,
  Palette,
  PenLine,
  Rocket,
  Search,
  Share2,
  Sparkles,
  Target,
  ThumbsUp,
  TrendingUp,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface FloatingIcon {
  Icon: LucideIcon;
  /** Positie- en grootteklassen (op de wrapper-span). */
  pos: string;
  /** Grootte + rotatie op het icoon zelf. */
  icon: string;
  /** Verberg op kleine schermen om het rustig te houden. */
  hideMobile?: boolean;
  /** Zonnegeel-accent i.p.v. wit. */
  accent?: boolean;
}

/**
 * Marketing-iconen die bij Brand & Boost passen, subtiel verspreid over de
 * hero-achtergrond. Het centrale tekstvlak wordt vrij gehouden, de opacity is
 * laag en de iconen zweven zacht (zie animate-float-sm).
 */
const ICONS: FloatingIcon[] = [
  { Icon: Megaphone, pos: "left-[6%] top-[14%]", icon: "h-12 w-12 -rotate-12" },
  { Icon: Target, pos: "right-[8%] top-[16%]", icon: "h-12 w-12 rotate-12" },
  { Icon: TrendingUp, pos: "left-[16%] top-[66%]", icon: "h-14 w-14 rotate-6" },
  { Icon: BarChart3, pos: "right-[12%] top-[70%]", icon: "h-14 w-14 -rotate-6" },
  { Icon: Palette, pos: "left-[10%] top-[40%]", icon: "h-10 w-10 -rotate-6" },
  { Icon: Globe, pos: "right-[6%] top-[44%]", icon: "h-11 w-11 rotate-6" },
  { Icon: Sparkles, pos: "right-[20%] top-[58%]", icon: "h-12 w-12 -rotate-12", accent: true },
  { Icon: Rocket, pos: "left-[22%] top-[24%]", icon: "h-12 w-12 rotate-12", accent: true },
  { Icon: Search, pos: "left-[34%] top-[10%]", icon: "h-10 w-10 rotate-6", hideMobile: true },
  { Icon: PenLine, pos: "right-[32%] top-[12%]", icon: "h-10 w-10 -rotate-12", hideMobile: true },
  { Icon: Camera, pos: "left-[4%] top-[78%]", icon: "h-11 w-11 rotate-6" },
  { Icon: Share2, pos: "right-[4%] top-[80%]", icon: "h-11 w-11 -rotate-6" },
  { Icon: Lightbulb, pos: "left-[45%] top-[85%]", icon: "h-9 w-9 rotate-6", hideMobile: true },
  { Icon: Hash, pos: "left-[64%] top-[84%]", icon: "h-9 w-9 -rotate-12", hideMobile: true },
  { Icon: AtSign, pos: "left-[28%] top-[86%]", icon: "h-9 w-9 rotate-12" },
  { Icon: MousePointerClick, pos: "left-[2%] top-[56%]", icon: "h-10 w-10 rotate-12" },
  { Icon: Heart, pos: "right-[24%] top-[26%]", icon: "h-8 w-8 -rotate-6", hideMobile: true },
  { Icon: ThumbsUp, pos: "left-[72%] top-[28%]", icon: "h-9 w-9 rotate-12", hideMobile: true },
  { Icon: Mail, pos: "right-[40%] top-[8%]", icon: "h-9 w-9 -rotate-6", hideMobile: true },
  { Icon: Code, pos: "right-[16%] top-[36%]", icon: "h-10 w-10 rotate-6", hideMobile: true },
];

export function HeroIconBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden text-white/[0.1]">
      {ICONS.map((item, index) => (
        <span
          key={index}
          className={cn("absolute animate-float-sm", item.pos, item.hideMobile && "hidden sm:block")}
          style={{ animationDelay: `${(index % 5) * 600}ms` }}
        >
          <item.Icon className={cn(item.icon, item.accent && "text-zonnegeel/25")} />
        </span>
      ))}
    </div>
  );
}
