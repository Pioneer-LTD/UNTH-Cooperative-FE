/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary-green": "#03653B",
        "light-primary-green": "#248159",
        "light-primary-blue": "#CAECDE",
        "light-primary-grey": "#606060",
      },
    },
  },
  plugins: [],
};
