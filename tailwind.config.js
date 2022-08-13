/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
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
