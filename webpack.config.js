const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  resolve: {
    alias: {
      'static': path.resolve(__dirname, 'static'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new ExtractTextPlugin('main.[contenthash].css'),
  ],
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                alias: {
                  './static': path.resolve(__dirname, 'static'),
                }
              }
            },
            { 
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  require('autoprefixer')(),
                ]
              }
            },
          ],
        })
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['syntax-dynamic-import'],
            presets: ['env']
          }
        }
      },
      {
        test: /static\/.*/,
        use: `file-loader?context=static&name=[path][name].[hash].[ext]`
      },
    ]
  }
};
