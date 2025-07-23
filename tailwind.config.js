/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        text: 'var(--text-color)',
        background: 'var(--background-color)',
        authBackground: 'var(--auth-background-color)',
        authText: 'var(--auth-text-color)',
        authActive: 'var(--auth-active-color)',
        active: 'var(--active-color)',
        overlay: 'var(--overlay-color)',
        card: 'var(--card-color)',
        "header-background": 'var(--header-background-color)',
        darkBackground:'var(--dark-background-color)'
      },
      maxWidth: {
        'layout': '1280px',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'hero-image': "url('./assets/images/heroSectionImage.png')",
      },
      screens: {
        'xs': '440px',
        'pad':'900px'
      },
    },
  },
  plugins: [],
}

