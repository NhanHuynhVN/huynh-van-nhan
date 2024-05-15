/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        '99tech': 'url(\'https://www.99tech.co/assets/img/bg-product_lg.jpg\')',
      },
    },
  },
  plugins: [],
};

