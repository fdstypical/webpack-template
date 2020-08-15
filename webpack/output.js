const path = require('path');

const output = {
  production: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../', 'dist'),
  },
  development: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../', 'dist'),
  },
}

module.exports = { output };