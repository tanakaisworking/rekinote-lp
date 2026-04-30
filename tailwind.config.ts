import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0c0c10",
        surface: "#131318",
        "surface-2": "#1a1a21",
        text: "#ececef",
        "text-muted": "#8c8c97",
        "text-dim": "#5e5e6a",
        accent: "#8b5cf6",
        "accent-2": "#a78bfa",
        line: "rgba(255,255,255,0.07)",
        "line-strong": "rgba(255,255,255,0.13)",
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans JP", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1180px",
      },
      transitionDuration: {
        "180": "180ms",
      },
    },
  },
  plugins: [],
};
export default config;
