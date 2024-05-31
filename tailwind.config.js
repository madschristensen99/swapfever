/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      pixel: ['pixel', 'monospace'],
      regular: ['workSans regular', 'monospace'],
      medium: ['workSans medium', 'monospace'],
    },
    extend: {
      colors: {
        gray: {
          100: '#CFCFD0',
          200: '#8F8F8F',
          300: '#343434',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        primary: {
          100: '#E8FF89',
          200: '#BEE719',
          300: '#8AA814',
        },
      },
      backgroundImage: {
        'default-pattern': "url('/VolumeBg.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
