/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nanum: ["Nanum Myeongjo", "serif"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 600,
      },
      colors: {
        blue: "#0c1c36",
        white: "#f9faf4",
        khaki: "#b3a286",
      },
    },
  },
  plugins: [],
};
