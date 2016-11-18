var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    index: __dirname + "/app/index.js"
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].build.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      }
    ]
  },
  devServer: {
    contentBase: "./build",
    colors: true,
    historyApiFallback: true,
    inline: true,
    port: 8888,
  },
}