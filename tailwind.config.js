/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          black: '#05060F', // deep space black
          nebula: '#7C3AED', // nebula purple
          star: '#F8FAFC', // star white
          cyan: '#22F5FF', // neon cyan accent
        },
      },
    },
  },
  plugins: [],
}
