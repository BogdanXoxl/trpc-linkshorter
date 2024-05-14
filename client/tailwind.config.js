/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6633EE",
          light: colors.violet[300],
          dark: "#090979",
        },
        secondary: "#000",
        textColor: {
          primary: colors.white,
          secondary: colors.slate[500],
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "'Apple Color Emoji'",
          "'Segoe UI Emoji'",
          "'Segoe UI Symbol'",
          "'Noto Color Emoji'",
        ],
      },
    },
  },
  plugins: [],
};
