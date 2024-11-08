const postCssVariables = require('postcss-css-variables')
const postCssImport = require('postcss-import')

const plugins = [
  postCssVariables,
  postCssImport
]

module.exports = { plugins: [...plugins] }
