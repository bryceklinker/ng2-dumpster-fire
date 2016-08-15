var SpecReporter = require('jasmine-spec-reporter');

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
    onPrepare: () => {
        jasmine.getEnv().addReporter(new SpecReporter());
    }
}