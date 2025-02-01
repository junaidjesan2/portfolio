/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#be94f9", // Add the custom color
      },
    },
  },
  plugins: [require("daisyui")],
}
