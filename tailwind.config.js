/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "770px",
        lg: "990px",
        xl: "1300px",
      },
      colors: {
        dark: "#0e0e0e",
        white: "#fff",
        Cgray: "#535353",
        Cred: "#9a0f39",
      },
    },
  },
  plugins: [],
};
