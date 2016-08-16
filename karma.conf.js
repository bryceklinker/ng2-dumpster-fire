module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/vendor.ts',
      'src/specs.ts'
    ],
    exclude: [
    ],
    preprocessors: {
      'src/vendor.ts': ['webpack'],
      'src/specs.ts': ['webpack']
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    webpack: require('./webpack.test')
  })
}
