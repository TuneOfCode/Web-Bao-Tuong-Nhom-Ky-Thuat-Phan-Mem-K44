module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      fdl: ["Fleur De Leah", "cursive"],
      prata: ["Prata", "serif"],
      sora: ["Sora", "sans-serif"],
    },
    screens: {
      mb: "150px",
      sm: "640px",
      md: "768px",
      lg: "1034px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      inset: {
        "1/10": "10%",
        "1/20": "5%",
      },
      height: {
        105: "410px",
        110: "440px",
        112: "465px",
        128: "32rem",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
