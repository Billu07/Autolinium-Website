/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        neon: {
          blue: "#00CFFF",
          pink: "#FF00E5",
          purple: "#9D4EDD",
          teal: "#00FFD1",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
