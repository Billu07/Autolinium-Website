/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#1A202C",
        "text-primary": "#FFFFFF", // For white headers
        "text-secondary": "#A0AEC0",
        "accent-blue": "#3B82F6",
        "accent-pink": "#DB2777", // For pink borders, replacing purple
        "accent-deep-teal": "#004D40", // For buttons
        "card-border": "rgba(219, 39, 119, 0.5)", // Matches App.css pink border
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
