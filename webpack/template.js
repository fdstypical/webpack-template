const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const createGenericConfig = (mode) => ({
  entry: './src/index.ts',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@assets': path.resolve(__dirname, '../src/assets'),
    },
    extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
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
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: mode === 'development',
              reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  }
});

module.exports = { createGenericConfig };