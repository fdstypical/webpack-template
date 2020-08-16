const { optimization, genericConfig, plugins, devServer, output } = require('./webpack');
const isDev = process.env.NODE_ENV === 'development';

async function webpackPrestart(env, { mode }) {
  return {
    ...genericConfig,
    devtool: isDev ? 'source-map' : '',
    output: output[mode],
    optimization: optimization[mode],
    plugins: plugins[mode],
    devServer,
  };
}

module.exports = webpackPrestart;
