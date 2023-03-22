/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        zIndex: {
          0: '0',
          10: '10',
        },
        primary: {
          DEFAULT: '#3358C4',
          dark: '#121212',
          light: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F0F0F0',
        },
        accent: {
          DEFAULT: '#FF8A3D',
          hover: '#FFA15F',
        },
      },
      textColor: {
        primary: {
          DEFAULT: '#3358C4',
        },
        secondary: {
          DEFAULT: '#F0F0F0',
        },
        accent: {
          DEFAULT: '#FF8A3D',
        },
      },
      fontFamily: {
        header: ['Montserrat', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
};
