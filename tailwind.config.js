/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./dev/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c1e8ef36",
        secondary: "#43c2d1",
        tertiary: "#272626",
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
      },
      screens: {
        xs: "450px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      fontSize: {
        'h4': '1.25rem',
      },
      fontWeight: {
        'h4': 600, // Váha písma
      },
      backgroundImage: {
        'hero': "url('./img/HeroWomenBlue.jpg')",
      },
    },
  },
  plugins: [],
}