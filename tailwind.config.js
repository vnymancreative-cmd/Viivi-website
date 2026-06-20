/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5EFE3",
        "paper-2": "#EBE0C9",
        ink: "#1C1A15",
        "ink-soft": "#6F6A5A",
        line: "#DDD0B0",
        deep: "#173A66",
        "deep-2": "#0F2A4D",
        sky: "#D8E6FA",
        bright: "#4D78D9",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
