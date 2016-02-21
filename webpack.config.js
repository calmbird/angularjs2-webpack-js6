var path = require('path');
module.exports = {
  entry: './src/main.js',
  cache: true,
  debug: true,
  devtool: 'source-map',
  output: {
    path: 'dev',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
          plugins: ['babel-plugin-transform-decorators-legacy' ]
        }
      }
    ]
  }
};
