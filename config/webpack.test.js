/**
 * @author: @AngularClass
 */

const helpers = require('./helpers');

/**
 * Webpack Plugins
 */
const webpack = require('webpack');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

/**
 * Webpack configuration
 */
module.exports = {

  devtool: 'inline-source-map',

  /**
   * Options affecting the resolving of modules.
   *
   * See: http://webpack.github.io/docs/configuration.html#resolve
   */
  resolve: {

    /**
     * An array of extensions that should be used to resolve modules.
     */
    extensions: ['', '.js'],

    root: helpers.root('src'),

  },

  /**
   * Options affecting the normal modules.
   */
  module: {

    /**
     * An array of applied pre and post loaders.
     *
     * See: http://webpack.github.io/docs/configuration.html#module-preloaders-module-postloaders
     */
    preLoaders: [


      /**
       * Source map loader support for *.js files
       * Extracts SourceMaps for source files that as added as sourceMappingURL comment.
       *
       * See: https://github.com/webpack/source-map-loader
       */
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
        // these packages have problems with their sourcemaps
        helpers.root('node_modules/rxjs'),
        helpers.root('node_modules/@angular')
      ]}

    ],

    /**
     * An array of automatically applied loaders.
     *
     * IMPORTANT: The loaders here are resolved relative to the resource which they are applied to.
     * This means they are not resolved relative to the configuration file.
     *
     * See: http://webpack.github.io/docs/configuration.html#module-loaders
     */
    loaders: [

      {
          test: /\.js$/,
          loaders: ['babel-loader', 'angular2-template-loader'],
          exclude: /node_modules/,
      },
      {
          test: /\.less$/,
          loader: 'raw-loader!less-loader!autoprefixer'
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer")
      },
      {
          test: /\.html$/,
          loader: 'html'
      }
    ],

    /**
     * An array of applied pre and post loaders.
     *
     * See: http://webpack.github.io/docs/configuration.html#module-preloaders-module-postloaders
     */
    postLoaders: [

      /**
       * Instruments JS files with Istanbul for subsequent code coverage reporting.
       * Instrument only testing sources.
       *
       * See: https://github.com/deepsweet/istanbul-instrumenter-loader
       */
      {
        test: /\.js$/, loader: 'istanbul-instrumenter-loader',
        include: helpers.root('src'),
        exclude: [
          /\.(e2e|spec)\.js$/,
          /node_modules/
        ]
      }

    ]
  },

  htmlLoader: {
      minimize: true,
      removeAttributeQuotes: false,
      caseSensitive: true,
      customAttrSurround: [[/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/]],
      customAttrAssign: [/\)?\]?=/]
  },

  /**
   * Add additional plugins to the compiler.
   */
  plugins: [

    // Avoid publishing files when compilation failed:
    new webpack.NoErrorsPlugin(),
    // Delete duplicate code
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    // Uglify
    //new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),

    // Write out CSS bundle to its own file:
    new ExtractTextPlugin('style.css', { allChunks: true }),

    new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: 'body',
        hash: true
    })

  ],

  /**
   * Include polyfills or mocks for various node stuff
   * Description: Node configuration
   *
   * See: https://webpack.github.io/docs/configuration.html#node
   */
  node: {
    global: 'window',
    process: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};
