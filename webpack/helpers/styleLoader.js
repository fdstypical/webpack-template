const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';

const styleLoader = addition => {
  const cssLoaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true,
      }
    },
    'css-loader'
  ];

  if (addition) cssLoaders.push(addition);

  return cssLoaders;
}

module.exports = { styleLoader };