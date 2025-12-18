/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        heading: ["Barlow", "sans-serif"]
      },
      colors: {
        brand: "#1E90FF",
        dark: "#000E1C",
        body: "#192633",
        light: "#EDF6FF"
      }
    }
  },
  plugins: []
}
