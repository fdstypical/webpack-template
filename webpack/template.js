const path = require('path');
const { styleLoader, filename, jsLoaders } = require('./helpers');

const genericConfig = {
  context: path.resolve(__dirname, 'src'),
  entry: [
    '@babel/polyfill',
    path.resolve(__dirname, '../src/', 'index.js'),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@assets': path.resolve(__dirname, '.../src/assets'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|gif)/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: styleLoader(),
      },
      {
        test: /\.s[ac]ss$/,
        use: styleLoader('sass-loader'),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      }
    ]
  }
}

module.exports = { genericConfig };