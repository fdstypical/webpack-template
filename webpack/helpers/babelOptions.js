const babelOptions = (preset, plugin) => {
  const options = {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties']
  }

  if (preset) options.presets.push(preset);
  if (plugin) options.plugins.push(plugin);

  return options;
}

module.exports = { babelOptions };