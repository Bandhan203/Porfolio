/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Body
        heading: ['Poppins', 'Inter', 'DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Headings
        accent: ['Pacifico', 'Dancing Script', 'cursive'], // Accent
      },
    },
  },
  plugins: [],
};
