/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: "#0ff",
        neonPink: "#ff00ff",
        darkBg: "#121212",
      },
      fontFamily: {
        futuristic: ['"Orbitron"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
