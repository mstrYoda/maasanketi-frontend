/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Important to keep Tailwind from overriding existing styles
  important: false,
  // Customize the prefix to avoid conflicts with existing classes
  prefix: 'tw-',
  theme: {
    extend: {
      // Extend Tailwind with custom colors from your existing design
      colors: {
        'primary': '#4361ee',
        'primary-light': '#4895ef',
        'primary-dark': '#3a0ca3',
        'secondary': '#4cc9f0',
        'accent': '#f72585',
      },
    },
  },
  plugins: [],
} 