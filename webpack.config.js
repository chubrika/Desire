var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');



var newWebpackConfig = {
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, './src')
        )
    ]
};

// Webpack Config
var webpackConfig = {
    entry: {
        'polyfills': './src/polyfills.browser.ts',
        'vendor': './src/vendor.browser.ts',
        'main': './src/main.browser.ts'
    },

    output: {
        path: path.join(__dirname, 'dist')
    },

    plugins: [
        new CopyWebpackPlugin([
            { from:'src/index.html' },
            { from: "src/assets/icons", to: "assets/icons" }
        ]),
        // new webpack.optimize.UglifyJsPlugin({
        //     beautify: false,
        //     mangle: {
        //         screw_ie8: true,
        //         keep_fnames: true
        //     },
        //     compress: {
        //         warnings: false,
        //         screw_ie8: true
        //     },
        //     comments: false
        // }),
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: false
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills'],
            minChunks: Infinity
        }),
        new webpack.DefinePlugin({
            "require.specified": "require.resolve"
        })
    ],

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=assets/img/[name].[ext]'

            },
            {
                test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]'
            }
        ]
    }

};


// Our Webpack Defaults
var defaultConfig = {
    devtool: 'cheap-module-source-map',
    cache: true,
    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['*', '.ts', '.js']
    },

    devServer: {
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 }
    },

    node: {
        global: true,
        crypto: 'empty',
        module: false,
        Buffer: false,
        clearImmediate: false,
        setImmediate: false
    }
};

var webpackMerge = require('webpack-merge');
module.exports = webpackMerge(defaultConfig, webpackConfig, newWebpackConfig);
