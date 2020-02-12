const path = require('path')
const webpack = require('webpack')
// cnpm i --save-dev html-webpcak-plugin
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports =  {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 14000,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        // cnpm install --save-dev babel-loader@7 babel-core babel-preset-es2015
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        // cnpm install --save-dev vue-loader vue-template-compiler
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归我所有'),
    new htmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}