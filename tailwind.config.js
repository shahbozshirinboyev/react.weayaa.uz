/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        mainColor: "#2E6734",
      },
      columns: {
        1: "1", // column-count: 1 uchun
        2: "2", // column-count: 1 uchun
        3: "3", // column-count: 1 uchun
        4: "4", // column-count: 1 uchun
      },
    },
  },
  plugins: [require('daisyui'), ],  daisyui: { darkTheme: false, },
};
