/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: "#0a0a0a",
        acid: "#c8ff00",
      },
      boxShadow: {
        brutal: "6px 6px 0 0 #c8ff00",
        "brutal-white": "5px 5px 0 0 #ffffff",
        "brutal-sm": "3px 3px 0 0 #c8ff00",
      },
    },
  },
  plugins: [],
};
