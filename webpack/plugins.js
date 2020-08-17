const path = require('path');
const webpack = require('webpack');
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
      template: path.resolve(__dirname, '../src/', 'static/template.html'),
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
      template: path.resolve(__dirname, '../src/', 'static/template.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};

module.exports = { plugins };