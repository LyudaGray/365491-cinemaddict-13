const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/index.html'),
    compress: true,
    port: 8080
  }
};
