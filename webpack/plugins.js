const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPluginConfig = {
  filename: 'index.html',
  hash: true,
};

const plugins = {
  production: [
    new HTMLWebpackPlugin({
      ...htmlPluginConfig,
      template: path.resolve(__dirname, '../src/', 'index.html'),
      minify: {
        collapseWhitespace: true
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
  ],
  development: [
    new HTMLWebpackPlugin({
      ...htmlPluginConfig,
      template: path.resolve(__dirname, '../src/', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};

module.exports = { plugins };