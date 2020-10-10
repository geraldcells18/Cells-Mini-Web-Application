// @ts-ignore
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/*.html',
    './src/**/*.html',
    './src/**/**/*.html',
  ],
  css: ['./src/styles.scss'],
  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

process.env.NODE_ENV === 'production'
  ? console.log('PURGING TAILWIND CSS FOR PRODUCTION...')
  : console.log('PURGING TAILWIND CSS FOR DEVELOPMENT...');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
