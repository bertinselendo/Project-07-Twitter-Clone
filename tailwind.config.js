/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1d9bf0",
        "blue-hover": "#1a8cd8",
        "text-gray": "#71767b",
        gray: "#16181c",
        "gray-hober": "#ffffff08",
        "gray-text": "#2f3336",
        green: "#00ba7c",
        purple: "#f91880",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-animated"),
  ],
};
