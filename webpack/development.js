const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const defaultConfig = require('./config');

module.exports = {
  ...defaultConfig,
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ReactStarter',
      template: path.join(__dirname, '../src/index.html'),
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: 'styles.css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
};
