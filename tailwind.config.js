/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["Source Code Pro", "monospace"],
      },
      colors: {
        ai: {
          dark: "#0a1128",
          darker: "#101b3d",
          blue: "#3b82f6",
          cyan: "#06b6d4",
          indigo: "#6366f1",
          teal: "#14b8a6",
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        neural: "neuralPulse 4s ease-in-out infinite",
        "data-pulse": "dataPulse 2s ease-in-out infinite",
      },
      backdropBlur: {
        xl: "20px",
      },
      gradientColorStops: {
        "ai-start": "#1e40af",
        "ai-end": "#3b82f6",
      },
    },
  },
  plugins: [],
};
