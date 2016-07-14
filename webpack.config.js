var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
var DEBUG = !process.argv.includes('--release');
const VERBOSE = process.argv.includes('--verbose');

var GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG,
  'process.env.BROWSER': true
};

var config = {
  context: APP_PATH,
  entry: ['./data/prices.json', './data/calendar.json', './index.html', './favicon.ico', './main.jsx'],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  target: 'web',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint', 'jscs'],
        include: APP_PATH
      }
    ],
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(jpg|png|gif)$/, loader: 'url?limit=8192'},
      { test: /\.json$/, loader: 'file?name=[name].[ext]'},
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      { test: /\.ico$/, loader: 'file?name=[name].[ext]' }
    ]
  },
  plugins: [

    // Define free variables
    // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    new webpack.DefinePlugin(GLOBALS),

    // Assign the module and chunk ids by occurrence count
    // Consistent ordering of modules required if using any hashing ([hash] or [chunkhash])
    // https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
    new webpack.optimize.OccurenceOrderPlugin(true),

    ...DEBUG ? [] : [

      // Search for equal or similar files and deduplicate them in the output
      // https://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
      new webpack.optimize.DedupePlugin(),

      // Minimize all JavaScript output of chunks
      // https://github.com/mishoo/UglifyJS2#compressor-options
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
          warnings: VERBOSE
        }
      }),

      // A plugin for a more aggressive chunk merging strategy
      // https://webpack.github.io/docs/list-of-plugins.html#aggressivemergingplugin
      new webpack.optimize.AggressiveMergingPlugin()
    ]
  ]
};

module.exports = config;
