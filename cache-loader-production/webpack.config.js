const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TerserPlugin = require('terser-webpack-plugin');

const CACHE_PATH = `${__dirname}/.cache`;

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js'
  },

  mode: 'production',

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: `${CACHE_PATH}/vue-loader`,
            },
          },
          'vue-loader',
        ],
      },

      {
        test: /\.js$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: `${CACHE_PATH}/babel-loader`,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: `${CACHE_PATH}/css-loader`,
            },
          },
          'vue-style-loader',
          'css-loader',
        ],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
    }),
    new VueLoaderPlugin(),
  ],

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: `${CACHE_PATH}/terser`,
        terserOptions: {
          ecma: 6,
          compress: false,
        },
      }),
    ]
  },
}
