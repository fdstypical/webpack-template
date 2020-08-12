const isDev = process.env.NODE_ENV === 'development';
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = { filename };