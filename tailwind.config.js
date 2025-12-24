/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        heading: ["Barlow", "sans-serif"],
      },
      colors: {
        brand: "#1E90FF",
        dark: "#000E1C",
        body: "#192633",
        light: "#EDF6FF",
      },

      /* ✅ ADD KEYFRAMES HERE */
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.96)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },

      /* ✅ ADD ANIMATION HERE */
      animation: {
        fadeIn: "fadeIn 0.7s ease-in-out",
      },
    },
  },
  plugins: [],
}
