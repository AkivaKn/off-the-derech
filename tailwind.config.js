/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#3D52A0",
        secondaryColor: "#EDE8F5",
        backgroundColor: "#ADBBDA",
        hoverColor: "#7091E6",
        cardColor: "#8697C4",
      },
    },
  },
  plugins: [],
};
