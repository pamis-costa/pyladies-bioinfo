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
        'py-blue': '#085692',   // O azul escuro da Navbar
        'py-yellow': '#FFD140', // O amarelo da logo/botões
      },
    },
  },
  plugins: [],
};

export default config;