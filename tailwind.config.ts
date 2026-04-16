import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050b18",
        bg2: "#080f1f",
        purple: {
          DEFAULT: "#7c3aed",
          light: "#a855f7",
        },
        teal: "#0d9488",
        cyan: "#22d3ee",
        "text-base": "#e2e8f0",
        "text-muted": "#94a3b8",
        surface: "rgba(255,255,255,0.04)",
        "surface-hover": "rgba(255,255,255,0.07)",
        border: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm)", "sans-serif"],
      },
      backgroundImage: {
        gradient: "linear-gradient(135deg, #7c3aed, #a855f7, #22d3ee)",
      },
      animation: {
        drift: "drift 12s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        spin_slow: "spin 10s linear infinite",
        bar_fill: "barFill 3s ease-in-out infinite alternate",
        pulse_dot: "pulse_dot 2s infinite",
      },
      keyframes: {
        drift: {
          from: { transform: "translate(0,0) scale(1)" },
          to: { transform: "translate(30px,20px) scale(1.05)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        barFill: {
          from: { width: "40%" },
          to: { width: "90%" },
        },
        pulse_dot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.3)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
