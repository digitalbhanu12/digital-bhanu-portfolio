import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3A",
        skyAccent: "#38BDF8",
        emeraldAccent: "#10B981",
        mist: "#F6FAFD"
      },
      boxShadow: {
        glow: "0 18px 60px rgba(56, 189, 248, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
