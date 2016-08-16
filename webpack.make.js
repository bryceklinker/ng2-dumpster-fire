var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function make(env) {
    return {
        devtool: isProd(env) ? 'cheap-module-source-map' : 'eval',
        entry: {
            vendor: './src/vendor.ts',
            app: './src/main.ts'
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'js/[name].js',
            sourceMapFilename: '[file].map'
        },
        resolve: {
            extensions: ['', '.ts', '.js', '.html']
        },
        module: {
            loaders: [
                {
                    test: /\.ts$/,
                    loader: 'ts!angular2-template-loader'
                },
                { test: /\.html$/, loader: 'raw' }
            ]
        },
        plugins: getPlugins(env)
    };
}

function getPlugins(env) {
    var plugins = [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ];

    if (isTest(env))
        return plugins;
    
    plugins.push(new webpack.NoErrorsPlugin());
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity
    }))
    if (isProd(env)) {
        plugins.push(new webpack.optimize.OccurenceOrderPlugin());
        plugins.push(new webpack.optimize.UglifyJsPlugin());
    }

    return plugins;
}

function isTest(env) {
    return env === 'test';
}

function isProd(env) {
    return env === 'prod';
}