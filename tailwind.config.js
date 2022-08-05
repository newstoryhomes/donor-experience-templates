/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './tailwind.config.js/',
    './tailwind-default.config.js',
    './public/events/all-events.html',
    './public/events/vision-trip.html',
    './public/gifts/gifts-landing-page.html',
    './public/gifts/gifts-builders.html',
    './public/gifts/gifts-architects.html',
    './public/gifts/gifts-internal.html',
    './public/gifts/shipping-builders.html',
    './public/gifts/shipping-architects.html',
    './public/gifts/shipping-internal.html',
    './public/gifts/review-builders.html',
    './public/gifts/review-architects.html',
    './public/gifts/review-internal.html',
    './public/gifts/confirmation-builders.html',
    './public/gifts/confirmation-architects.html',
    './public/gifts/confirmation-internal.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00bae0',
        hover: '#3993B0',
        dark: '#2f2f2f',
        builders: '#003E50',
        architects: '#505A43',
        hover2: '#78826B',
        sage: '#B5C6B5',
        cream: '#F7F0EA',
        cream2: '#FFFBF9',
        lightgray: '#f9f9f9',
        yam: '#CC4E2B',
        footer: '#6c6c6c',
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        heading:['Barlow', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
