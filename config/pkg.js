// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  global: {
    entry: {
      app: path.resolve(__dirname, '../src/main.js')
    },
    assetsRoot: path.resolve(__dirname, '../package')
  },
  build: {
    // env: '"production"',
    // assetsSubDirectory: '',
    // assetsPublicPath: '',
    // productionSourceMap: false,
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../package/index.html'),
    assetsRoot: path.resolve(__dirname, '../package'),
    assetsSubDirectory: '',
    assetsPublicPath: '',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  }
}