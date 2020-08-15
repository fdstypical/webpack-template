const { optimization } = require('./optimizations');
const { genericConfig } = require('./template');
const { plugins } = require('./plugins');
const { devServer } = require('./devServer');
const { output } = require('./output');

module.exports = { optimization, genericConfig, plugins, devServer, output };