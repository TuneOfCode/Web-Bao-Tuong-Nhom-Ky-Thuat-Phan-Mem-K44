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
      mb: "250px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      inset: {
        "1/10": "10%",
        "1/20": "5%",
      },
      height: {
        112: "465px",
        128: "32rem",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
