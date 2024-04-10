/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        md: ["1rem", "1.10rem"], // Replace the values as needed
      },
      fontFamily: {
        sans: ['"Google Sans"', "ui-sans-serif", "system-ui"],
        pacifico: ["Pacifico", "ui-cursive", "cursive"],
        inter: ["Inter", "sans-serif"],
        "dancing-script": ["Dancing Script", "cursive"],
        crimson: ["Crimson Text", "serif"],
      },
      screens: {
        sm: "640px", // Small screens like smartphones
        md: "1024px", // Laptop screens and larger
        lg: "1280px", // Desktop screens and larger
        xl: "1536px", // Large desktop screens
      },
      zIndex: {
        1000: 1000,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
