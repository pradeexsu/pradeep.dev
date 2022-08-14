/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base1: 'var(--color-fill-base1)',
        base2: 'var(--color-fill-base2)',
        base3: 'var(--color-fill-base3)',
      },
      textColor: {
        primary: 'var(--color-primary)',
        secodnary: 'var(--color-secondary)',
        selected: 'var(--color-selection-forground)',
        base: 'var(--color-text-base)',
      },
      backgroundColor: {
        selected: 'var(--color-selection-background)',
        dark: 'var(--color-dark)'
      },
      '.theme-dark': {
        skin: {
          base: 'var(--color-text-base)',
        }
      },
      animation: {
        ping: 'ping 5s infinite',
        pinging: 'ping .3s infinite',
        sweep: 'sweep .5s ease-in-out'
      },
      keyframes: {
        sweep: {
          '0%': 'opacity-0 translateX(-10px)',
          '100%': 'opacity-100 translateX(0)',
        }
      }
    },
  },
  plugins: [],
}
