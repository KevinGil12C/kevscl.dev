/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0df259",
        "primary-dark": "#003b00",
        "background-dark": "#050a06",
        "terminal-bg": "#0a140d",
        "card-bg": "#0d1a10",
        "dir-header": "#1a2e1f",
        "surface": "#121d14",
      },
      fontFamily: {
        "mono": ["JetBrains Mono", "Fira Code", "monospace"],
        "display": ["Space Grotesk", "sans-serif"],
        "accent": ["'Press Start 2P'", "cursive"]
      },
      borderRadius: {
        "DEFAULT": "0.375rem",
        "md": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}