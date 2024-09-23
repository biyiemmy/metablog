import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        font: "var(--font)",
        subfont: "var(--subfont)",
        technology: "var(--technology)",
        writer: "var(--writer)",
        advertisment: "var(--advertisment)",
        searchbox: "var(--searchbox)",
      },
    },
  },
  plugins: [],
};
export default config;
