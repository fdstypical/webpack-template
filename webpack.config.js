const { optimization, genericConfig, plugins, devServer, output } = require('./webpack');

async function webpackPrestart(env, { mode }) {
  const isDev = mode === 'development';

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
