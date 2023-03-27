/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3358C4',
          DEFAULT: '#3358C4',
          dark: '#121212',
        },
        secondary: '#F0F0F0',
        accent: {
          DEFAULT: '#FF8A3D',
          hover: '#FFA15F',
        },
        background: {
          light: '#F0F0F0',
          dark: '#121212',
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
        dark: {
          DEFAULT: '#121212',
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

// Colors Palette
// * Dark Theme:
//     * Primary Color: #3358C4 (a deep blue)
//     * Secondary Color: #F0F0F0 (a light gray)
//     * Accent Color: #FF8A3D (an orange)
//     * Background Color: #121212 (a dark black)
// * Light Theme:
//     * Primary Color: #3358C4 (a deep blue)
//     * Secondary Color: #F0F0F0 (a light gray)
//     * Accent Color: #FF8A3D (an orange)
//     * Background Color: #FFFFFF (a bright white)
