/*
 * @Author: Sexy
 * @Date: 2019-09-26 14:14:25
 * @LastEditors  : Sexy
 * @LastEditTime : 2020-01-17 15:15:25
 * @Description: file content
 */
const path = require('path');
module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd', // 采用通用模块定义
    libraryExport: 'default' // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
  },

  /*  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map', */

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
