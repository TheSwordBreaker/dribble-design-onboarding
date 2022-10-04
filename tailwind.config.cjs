/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",

  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    fontFamily: {
      serif: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#664de5",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
}
