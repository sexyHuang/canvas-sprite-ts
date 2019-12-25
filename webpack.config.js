/*
 * @Author: Sexy
 * @Date: 2019-09-26 14:14:25
 * @LastEditors  : Sexy
 * @LastEditTime : 2019-12-20 15:06:24
 * @Description: file content
 */
const path = require('path');
module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
  // Other options...
};
