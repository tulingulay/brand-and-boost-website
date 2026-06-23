import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

/**
 * Design-systeem Brand & Boost.
 *
 * Merkkleuren staan zowel als named colors (bv. `bg-kobalt`, `text-zonnegeel`)
 * als via CSS-variabelen (zie src/index.css). Zo blijven ze in Lovable
 * bewerkbaar én werken de shadcn/ui-componenten op de semantische tokens
 * (primary, secondary, muted, ...).
 *
 * Hex-referentie:
 *   Kobaltblauw   #187DC1  -> hsl(204 78% 43%)
 *   Zonnegeel     #D4A017  -> hsl(44 80% 46%)
 *   Kastanjebruin #6E3F27  -> hsl(20 48% 29%)
 *   Creme         #F6F1EB  -> hsl(33 38% 94%)
 *   Antraciet     #2D2D2D  -> hsl(0 0% 18%)
 */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["'Bricolage Grotesque'", "system-ui", "sans-serif"],
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Vloeiende type-schaal (mobiel -> desktop)
        display: ["clamp(2.25rem, 6vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["clamp(2rem, 5vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.6rem, 3.5vw, 2.4rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h3: ["clamp(1.25rem, 2.2vw, 1.6rem)", { lineHeight: "1.25" }],
        lead: ["clamp(1.05rem, 1.6vw, 1.3rem)", { lineHeight: "1.6" }],
      },
      colors: {
        // --- Merkkleuren (named, via CSS-variabelen) ---
        kobalt: {
          DEFAULT: "hsl(var(--kobalt))",
          foreground: "hsl(var(--kobalt-foreground))",
        },
        zonnegeel: {
          DEFAULT: "hsl(var(--zonnegeel))",
          foreground: "hsl(var(--zonnegeel-foreground))",
        },
        kastanje: {
          DEFAULT: "hsl(var(--kastanje))",
          foreground: "hsl(var(--kastanje-foreground))",
        },
        creme: "hsl(var(--creme))",
        antraciet: "hsl(var(--antraciet))",

        // --- Semantische tokens (shadcn/ui) ---
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 0.35rem)",
        sm: "calc(var(--radius) - 0.6rem)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(45,45,45,0.04), 0 8px 24px -12px rgba(45,45,45,0.18)",
        "soft-lg": "0 2px 4px rgba(45,45,45,0.05), 0 24px 48px -20px rgba(45,45,45,0.25)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        "fade-in": "fade-in 0.6s ease-out both",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
