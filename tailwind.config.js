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
        nanum: ["var(--font-nanum)"],
      },

      colors: {
        blue: "#0c1c36",
        white: "#f9faf4",
        khaki: "#b3a286",
        grey: "#828282",
      },
    },
  },
  plugins: [],
};
