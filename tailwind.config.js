/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontSize: {
      sm: "clamp(0.875rem, 1vw, 2rem)",
      "2xl": "clamp(1.5rem, 1vw, 3rem)",
    },
    extend: {
      colors: {
        "primary-color": "hsl(75, 94%, 57%)",
        white: "hsl(0, 0%, 100%)",
        grey: "hsl(0, 0%, 20%)",
        "dark-grey": "hsl(0, 0%, 12%)",
        "off-black": "hsl(0, 0%, 8%)",
      },

      fontFamily: {
        "primary-font": ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

