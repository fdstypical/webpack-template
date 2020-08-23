const { optimization } = require('./optimizations');
const { createGenericConfig } = require('./template');
const { plugins } = require('./plugins');
const { devServer } = require('./devServer');
const { output } = require('./output');

module.exports = { optimization, createGenericConfig, plugins, devServer, output };