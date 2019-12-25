/*
 * @Author: Sexy
 * @Date: 2019-09-26 14:14:25
 * @LastEditors  : Sexy
 * @LastEditTime : 2019-12-25 15:03:15
 * @Description: file content
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BASE_PATH = path.resolve(__dirname, 'test');
module.exports = {
  entry: './test/demo/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: BASE_PATH
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './test/demo/index.html',
      hash: true
    })
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'img/', //输出到images文件夹
              limit: 500 //是把小于500B的文件打成Base64的格式，写入JS
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: BASE_PATH,
    compress: true,
    host: "192.168.1.137",
    port: 8080
  }
  // Other options...
};
