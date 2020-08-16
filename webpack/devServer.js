const path = require('path');

const devServer = {
  index: 'index.html',
  stats: 'errors-only',
  hot: true,
  noInfo: true,
  open: true,
  overlay: true,
  port: 3000,
  contentBase: path.join(__dirname, '../', 'dist'),
};

module.exports = { devServer };