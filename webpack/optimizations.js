const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const optimization = {
  production: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: /node_modules/,
      }),
    ],
  },
  development: {
    splitChunks: {},
  },
};

module.exports = { optimization };