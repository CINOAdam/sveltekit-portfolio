/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        boxDark: '#1B1B1B',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.28, 0.44, 0.49, 1)',
      },
      animation: {
        'bgLine': 'bgLine 3s linear infinite',
      },
      keyframes: {
        bgLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      },
      animationDelay: {
        '2000': '2s',
        '4000': '4s',
        '6000': '6s',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
