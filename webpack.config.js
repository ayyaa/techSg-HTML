const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry : {
    graph: './public/javascripts/graph.js',
    scripts: './public/javascripts/scripts.js',
    style: './public/stylesheets/style.css'
  },
  output:{
    path : path.resolve(__dirname,'./build/'),
    filename : 'javascripts/[name].bundle.js',
  },
  module : {
    rules : [
      {
        test : /\.css$/,
        loader: ExtractTextPlugin.extract(['to-string-loader', 'css-loader']),
      }
    ]
  },
  plugins : [
    new UglifyJSPlugin(),
    new ExtractTextPlugin("/css/[name].bundle.css")
  , new HtmlWebpackPlugin({
    scripts: path.join(__dirname, 'javacripts/scripts.bundle.js'),
  })
  ],
  resolve: {
    extensions: ['.css', '.js']
  }
}
