import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: "#1E2A5A",
        saffron: "#E8590C",
        marigold: "#F7B731",
        maroon: "#5E1A2B",
        warm: "#FFFBF5",
        ink: "#1F1F29",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        soft: "0 12px 36px rgba(30, 42, 90, 0.08)",
        card: "0 18px 48px rgba(30, 42, 90, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
