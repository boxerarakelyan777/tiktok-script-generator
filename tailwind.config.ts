/** @type {import('tailwindcss').Config} */

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
        primary: '#1DA1F2',  // Example primary color
        dark: '#1a202c',     // Custom dark color
        'blue-dark': '#0056b3', // Custom blue dark color
      },
    },
  },
  plugins: [],
};
export default config;
