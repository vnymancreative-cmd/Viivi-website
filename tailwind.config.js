/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F6F3",
        "paper-2": "#EFECE5",
        ink: "#181A1B",
        "ink-soft": "#6B6964",
        line: "#DEDDD4",
        deep: "#173A66",
        "deep-2": "#0F2A4D",
        sky: "#CFE4F7",
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
