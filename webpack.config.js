const path = require('path');
const nodeExternals = require('webpack-node-externals');
// Exclude node_modules being bundled
//const ReloadServerPlugin = require('reload-server-webpack-plugin');
const SOURCE_PATH = path.join(__dirname, 'src', 'index.js');
const BUILD_PATH = path.join(__dirname, 'dist');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: SOURCE_PATH,
  output: {
    filename: 'index.js',
    path: BUILD_PATH
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  watch: true,
  devServer: {
    contentBase: BUILD_PATH,
    open: true
  },
  plugins: [
    //new ReloadServerPlugin({ script: path.join(__dirname, 'dist', 'index.js') })
  ]
}