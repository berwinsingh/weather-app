/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "para-font-roboto": "'Roboto', sans-serif",
        "heading-font-poppins": "'Poppins', sans-serif",
      },
      fontSize:{
        "main-temp":"9rem",
      },
      width:{
        "container-width":"50rem",
      },
    },
  },
  plugins: [],
}

