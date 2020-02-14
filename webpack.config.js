// module.exports = {
//   theme: {
//     extend: {}
//   },
//   variants: {},
//   plugins: []
// }
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./**/*.html'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          syntax: 'postcss-scss',
          plugins: () => [
            require('postcss-import'),
            require('tailwindcss'),
            require('autoprefixer'),
            ...process.env.NODE_ENV === 'production' ? [purgecss] : []
          ]
        }
      }
    ]
  }
};

