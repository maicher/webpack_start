const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    './apps/main/assets/index.sass',
    './apps/main/assets/index.js'
  ],
  output: {
    filename: './public/assets/index.js'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        loader: 'css-loader'
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/assets/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./public/assets/index.css', { allChunks: true }),
    new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' })
  ]
}
