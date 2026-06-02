/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        cute: ['"Gloria Hallelujah"', '"Baloo 2"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 24px 80px rgba(75, 61, 92, 0.16)',
        button: '0 12px 28px rgba(105, 86, 128, 0.18)'
      },
      borderRadius: {
        soft: '1.5rem'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        tail: {
          '0%, 100%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(-9deg)' }
        },
        blink: {
          '0%, 88%, 100%': { transform: 'scaleY(1)' },
          '92%, 96%': { transform: 'scaleY(0.08)' }
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        tail: 'tail 2.4s ease-in-out infinite',
        blink: 'blink 5s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
