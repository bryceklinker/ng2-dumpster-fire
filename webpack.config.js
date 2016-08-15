var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
}