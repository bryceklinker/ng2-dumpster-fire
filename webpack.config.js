module.exports = {
    output: {
        filename: 'bundle.js'
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
    }
}