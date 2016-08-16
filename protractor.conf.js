var SpecReporter = require('jasmine-spec-reporter');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.prod');
var deasync = require('deasync');

var server;
exports.config = {
    allScriptsTimeout: 11000,
    useAllAngular2AppRoots: true,
    directConnect: true,
    framework: 'jasmine',
    baseUrl: 'http://localhost:8080',
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
        var isServerReady = false;
        var isBundleReady = false;
        var compiler = webpack(webpackConfig, () => {
            isBundleReady = true;
            console.log('Dumpster fire bundled...');
        });
        server = new WebpackDevServer(compiler, {});
        server.listen(8080, () => {
            isServerReady = true;
            console.log('Dumpster fire started...');
        });

        deasync.loopWhile(() => !isServerReady || !isBundleReady);
    },
    afterLaunch: () => {
        server.close();
    },
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new SpecReporter());
    }
}