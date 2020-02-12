const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  devServer: {
    // cnpm i --save-dev webpack-dev-server@2.9.3
    contentBase: './dist',
    inline: true,
    port: 8888
  }
})