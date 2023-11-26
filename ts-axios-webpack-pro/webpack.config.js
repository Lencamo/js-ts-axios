const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  // 基本配置
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.vue'], // 让模块化导入可以省略后缀名（默认值为：['.js', '.json', '.wasm']）
    alias: {
      '@': path.join(__dirname, './src/')
    }
  },

  // 辅助插件
  // webpack-dev-server
  devServer: {
    open: true,
    port: 90,
    host: '127.0.0.1'
  },
  // html-webpack-plugin
  plugins: [
    new HtmlPlugin({
      template: './index.html' // html模板
    })
  ],
  // ts-loader
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
}
