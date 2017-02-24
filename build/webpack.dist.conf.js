var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.dist.env


delete baseWebpackConfig.entry

var webpackConfig = merge(baseWebpackConfig, {
  entry: './src/index.js',
  // module: {
  //   loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
  // },
  // devtool: config.build.productionSourceMap ? '#source-map' : false,
  module: {
    loaders: utils.styleLoaders({ sourceMap: false, extract: true })
  },
  devtool: false,
  output: {
    path: config.dist.assetsRoot,
    publicPath: './',
    filename: utils.assetsPath('index.js'),
    library: 'RunVue',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs2: 'vue',
      amd: 'vue',
      commonjs: 'vue'
    }
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    // extract css into its own file
    new ExtractTextPlugin(utils.assetsPath('./style.css'))
  ]
})


module.exports = webpackConfig
