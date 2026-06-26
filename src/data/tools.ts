/**
 * Programma's waar Brand & Boost mee werkt. `logo` verwijst naar een SVG in
 * /public/tools; ontbreekt het logo, dan tonen wij de naam als wordmark.
 */

export interface Tool {
  name: string;
  logo?: string;
}

export const tools: Tool[] = [
  { name: "WordPress", logo: "/tools/wordpress.svg" },
  { name: "ChatGPT", logo: "/tools/chatgpt.svg" },
  { name: "Wix", logo: "/tools/wix.svg" },
  { name: "Lovable", logo: "/tools/lovable.svg" },
  { name: "Meta Business Suite", logo: "/tools/meta.svg" },
  { name: "Google Ads", logo: "/tools/googleads.svg" },
  { name: "Canva", logo: "/tools/canva.svg" },
  { name: "Adobe Photoshop", logo: "/tools/photoshop.svg" },
  { name: "CapCut Pro" },
  { name: "Adobe Premiere" },
  { name: "Notion", logo: "/tools/notion.svg" },
];
