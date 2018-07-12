var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry : {
    graph: './public/javacripts/graph.js',
    // scripts: './public/javacripts/scripts.js',
    // style: './public/stylesheets/style.css'
  },
  output:{
    path : path.resolve(__dirname,'./build/'),
    filename : 'javacripts/graph.bundle.js',
  },
  module : {
    rules : [
      {
        test : /\.css$/,
        loader : ExtractTextPlugin.extract(['to-string-loader','css-loader'])
      }
    ]
  },
  plugins : [
    new ExtractTextPlugin({
      filename : 'stylesheets/style.bundle.css',
    })
  ],
  // resolve: {
  //   alias: {
  //     Utilities: path.resolve(__dirname, 'src/utilities/'),
  //     Templates: path.resolve(__dirname, 'src/templates/')
  //   }
  // },
  devServer: {  // configuration for webpack-dev-server
    contentBase: './src',
    port: 7700, // port to run dev-server
  } 
}