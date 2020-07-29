const path = require('path');
const webpack = require('webpack');

const { PORT } = process.env;

module.exports = {
  entry: [
    './src/frontend/index.js',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload_true',
  ],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/app.js',
    publicPath: `http://localhost:${PORT}/`,
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
          },
        },
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
