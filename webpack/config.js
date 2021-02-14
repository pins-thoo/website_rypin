const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: ['babel-polyfill', path.join(__dirname, '../src/index')],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      actions: path.resolve(__dirname, '../src/redux/actions'),
      api: path.resolve(__dirname, '../src/api'),
      components: path.resolve(__dirname, '../src/components'),
      containers: path.resolve(__dirname, '../src/containers'),
      reducers: path.resolve(__dirname, '../src/redux/reducers'),
      sagas: path.resolve(__dirname, '../src/redux/sagas'),
      selectors: path.resolve(__dirname, '../src/redux/selectors'),
      utils: path.resolve(__dirname, '../src/utils'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader?name=img/[hash].[ext]',
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['emotion', '@babel/plugin-proposal-class-properties'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
