var SpecReporter = require('jasmine-spec-reporter');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');

var server;
exports.config = {
    allScriptsTimeout: 11000,
    useAllAngular2AppRoots: true,
    directConnect: true,
    framework: 'jasmine',
    baseUrl: 'http://localhost:8080/',
    specs: [
        'e2e/**/*.e2e.ts'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: () => {}
    },
    beforeLaunch: () => {
        var compiler = webpack(webpackConfig);
        server = new WebpackDevServer(compiler, {
            publicPath: '/dist/'
        });
        server.listen(8080, () => {});
    },
    afterLaunch: () => {
        server.close();
    },
    onPrepare: () => {
        jasmine.getEnv().addReporter(new SpecReporter());
    }
}