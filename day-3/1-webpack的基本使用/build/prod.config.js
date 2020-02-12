// cnpm i --save-dev uglifyjs-webpack-plugin@1.1.1
const uglifyjsWebpaclPlugin = require('uglifyjs-webpack-plugin')
// cnpm i webpack-merge --save-dev
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  plugins: [
    new uglifyjsWebpaclPlugin()
  ]
})