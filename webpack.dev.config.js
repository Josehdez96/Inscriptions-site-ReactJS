const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const { PORT, ENV } = process.env;

const isDev = ENV === 'development';
const entry = ['./src/frontend/index.js'];

if (isDev) {
  entry.push(
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload_true'
  );
}

module.exports = {
  entry: entry,
  mode: ENV,
  output: {
    path: path.resolve(__dirname, 'src/serverSide/public'),
    filename: isDev ? 'assets/app.js' : 'assets/app-[hash].js',
    publicPath: `http://localhost:3000/`,
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9000,
    hot: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
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
        use: [ExtractCssChunks.loader, 'css-loader'],
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
  plugins: [
    isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
    isDev
      ? () => {}
      : new CompressionWebpackPlugin({
          test: /\.js$|\.css$/,
          filename: '[path].gz',
        }),
    isDev ? () => {} : new ManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev ? 'assets/app.css' : 'assets/app-[hash].css',
    }),
    new ExtractCssChunks({
      filename: isDev ? 'assets/app.css' : 'assets/app-[hash].css',
    }),
  ],
};
