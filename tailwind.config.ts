import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // تعريفات الألوان الأساسية لـ shadcn والـ border
        border: "hsl(var(--border, 240 5.9% 90%) / <alpha-value>)",
        input: "hsl(var(--input, 240 5.9% 90%) / <alpha-value>)",
        ring: "hsl(var(--ring, 240 5% 64.9%) / <alpha-value>)",
        background: "hsl(var(--background, 0 0% 100%) / <alpha-value>)",
        foreground: "hsl(var(--foreground, 240 10% 3.9%) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary, 199 91% 64%) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground, 222.2 47.4% 11.2%) / <alpha-value>)",
          50: "#E1F5FE",
          100: "#B3E5FC",
          200: "#81D4FA",
          300: "#4FC3F7",
          400: "#29B6F6",
          500: "#03A9F4",
          600: "#039BE5",
          700: "#0288D1",
          800: "#0277BD",
          900: "#01579B",
        },
        sand: {
          DEFAULT: "#E8D8C3",
          50: "#FBF7F2",
          100: "#F5EDE2",
          200: "#E8D8C3",
          300: "#D4BFA0",
          400: "#C0A67D",
          500: "#AC8D5A",
          600: "#8A7048",
          700: "#685436",
          800: "#463824",
          900: "#241C12",
        },
        dark: {
          DEFAULT: "#0F172A",
          50: "#1E293B",
          100: "#334155",
          200: "#475569",
          300: "#64748B",
          400: "#94A3B8",
          500: "#CBD5E1",
          600: "#E2E8F0",
          700: "#F1F5F9",
          800: "#F8FAFC",
          900: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        arabic: ["Noto Sans Arabic", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(30px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
