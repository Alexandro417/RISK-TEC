module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0A1D37",
          light: "#1E3A8A",
          green: "#06B67A",
          yellow: "#FACC15",
          red: "#DC2626",
        },
        textStrong: "#0F172A",
        textSoft: "#475569",
        bgSoft: "#F5F7FA"
      }
    },
  },
  plugins: [require("@tailwindcss-animate")],
}
