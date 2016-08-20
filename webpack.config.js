var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var debug = process.env.NODE_ENV !== 'production';

module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : null,
    debug: debug,
    entry: {
        'vendor': './src/vendor.js',
        'app': './src/main.js'
    },

    resolve: {
        extensions: ['', '.js', '.less', '.html', '.css', '.jpg'],
    },

    output: {
        path: path.join(__dirname, "dist"),
        filename: "scripts/[name].bundle.js"
    },

    module: {
        noParse: [/reflect-metadata/],

        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader', 'angular2-template-loader'],
                exclude: /node_modules/,
            }, {
                test: /\.html$/,
                loader: 'html'
            }, {
                test: /\.less$/,
                loader: 'raw-loader!less-loader!autoprefixer'
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer")
            }, {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: "file?name=assets/[name].[ext]"
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

    plugins: [
        // Avoid publishing files when compilation failed:
        new webpack.NoErrorsPlugin(),
        // Delete duplicate code
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        // Uglify
        //new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),

        // Write out CSS bundle to its own file:
        new ExtractTextPlugin('styles/[name].css', { allChunks: true }),

        // Automatically move all modules defined outside of application directory to vendor bundle.
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            hash: true
        })
    ],

    // Looks pretty
    stats: { colors: true },
};
