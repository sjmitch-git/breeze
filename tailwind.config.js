/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.indigo[600],
          light: colors.indigo[300],
          dark: colors.indigo[900],
        },
        secondary: {
          DEFAULT: colors.gray[600],
          light: colors.gray[300],
          dark: colors.gray[900],
        },
        accent: {
          DEFAULT: colors.orange[500],
          light: colors.orange[300],
          dark: colors.orange[700],
        },
        dark: colors.gray[800],
        light: colors.gray[100],
        info: {
          DEFAULT: colors.sky[400],
          light: colors.sky[200],
          dark: colors.sky[600],
        },
        success: {
          DEFAULT: colors.green[600],
          light: colors.green[400],
          dark: colors.green[800],
        },
        warning: {
          DEFAULT: colors.amber[500],
          light: colors.amber[300],
          dark: colors.amber[700],
        },
        error: {
          DEFAULT: colors.red[600],
          light: colors.red[400],
          dark: colors.red[800],
        },
        danger: {
          DEFAULT: colors.red[600],
          light: colors.red[400],
          dark: colors.red[800],
        },
        neutral: colors.gray[400],
        current: "currentColor",
        transparent: "transparent",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/typography"),
  ],
};
