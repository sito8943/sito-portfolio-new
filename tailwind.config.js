/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#608df7",
      secondary: "#a8aabc",
      "main-background": "#1b1b1b",
      "dark-p": "#002759",
      "dark-s": "#747687",
      "secondary-background": "#222",
      "red-bg": "#540a1c",
      "opacity-secondary-background": "#222222ee",
      "opacity-secondary-background-projects": "#222222ee",
    },
  },
  plugins: [],
};
