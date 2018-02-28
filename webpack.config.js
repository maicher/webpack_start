const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  entry: './apps/main/assets/index.js',
  output: {
    filename: './public/assets/index.js',
  }
},
{
  entry: './apps/main/assets/index.sass',
  output: {
    filename: './public/assets/index.css',
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("./public/assets/index.css", {
      allChunks: true
    })
  ]
}
];