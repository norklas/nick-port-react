/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "quill-gray": "#E0E2DB",
        celeste: "#D2D4C8",
        "green-spring": "#B8BDB5",
        "oslo-gray": "#889696",
        corduroy: "#5F7470",
      },
    },
  },
  plugins: [],
};
