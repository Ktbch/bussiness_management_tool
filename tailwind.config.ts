import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1E3A8A",
        secondaryColor: "#14B8A6",
        accentColor: "#F59E0B",
        neturalColor: "#F3F4F6",
        errorColor: "#DC2626",
        netualColor2: " #6B7280",
        sucessColor: "#10B981",
      },
    },
  },
  plugins: [],
};
export default config;
