const { optimization, genericConfig, plugins, devServer, output } = require('./webpack');
const isDev = process.env.NODE_ENV === 'development';

async function webpackPrestart(env, { mode }) {
  return {
    ...genericConfig,
    output: output[mode],
    devServer,
    devtool: isDev ? 'source-map' : '',
    optimization: optimization[mode],
    plugins,
  };
}

module.exports = webpackPrestart;
