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
        navy: {
          50: "#E8EDF4",
          100: "#C5D2E6",
          200: "#9FB5D5",
          300: "#7897C4",
          400: "#5A7FB8",
          500: "#3B67AB",
          600: "#1E3A5F",
          700: "#162D4A",
          800: "#0E1F34",
          900: "#0A1628",
          950: "#060D18",
        },
        gold: {
          300: "#E8C96A",
          400: "#D4B54E",
          500: "#C9A84C",
          600: "#B8960F",
          700: "#9A7D0A",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "line-grow": "lineGrow 1.2s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        lineGrow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #0A1628 0%, #1E3A5F 50%, #0A1628 100%)",
        "gold-gradient": "linear-gradient(90deg, #C9A84C, #E8C96A, #C9A84C)",
      },
    },
  },
  plugins: [],
};

export default config;
