/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sansnarrow': ['PT Sans Narrow', 'sans-serif'],
        'sacramentos': ['Sacramento', 'cursive'],
      },
      colors: {
        "dark-purple": "#081451",
        'light-white': 'rgba(255, 255, 255, 0, 10)'
      }

    },
  },
  plugins: [],
}