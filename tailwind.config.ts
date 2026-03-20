import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ["Rajdhani", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        bg: {
          primary: "#060b14",
          secondary: "#0b1422",
          panel: "rgba(6, 11, 20, 0.93)",
          card: "rgba(11, 20, 34, 0.85)",
        },
        accent: {
          green: "#00e87e",
          yellow: "#ffb800",
          red: "#ff3b5c",
          blue: "#00b8ff",
          cyan: "#00e5d4",
        },
        border: {
          dim: "rgba(0, 232, 126, 0.15)",
          glow: "rgba(0, 232, 126, 0.4)",
        },
      },
      keyframes: {
        pulse_dot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.3)" },
        },
        glow_in: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      animation: {
        pulse_dot: "pulse_dot 2s ease-in-out infinite",
        glow_in: "glow_in 0.35s ease-out forwards",
        scan: "scan 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
