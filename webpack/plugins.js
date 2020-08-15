const path = require('path');
const { filename } = require('./helpers');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

const plugins = [
  new HTMLWebpackPlugin({
    template: path.resolve(__dirname, '../src/', 'index.html'),
    minify: {
      collapseWhitespace: isProd
    }
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: filename('css'),
  })
];

module.exports = { plugins };