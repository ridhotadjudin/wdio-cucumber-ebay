exports.config = {
    runner: 'local',
    specs: [
        './features/**/*.feature'
    ],
     maxInstances: 1,
     logLevel: 'info',
     capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': { 
            args: [
                // '--headless=new',
                '--window-size=1366,768',
                '--disable-gpu',               
                '--disable-dev-shm-usage',     
                '--no-first-run',
                '--no-default-browser-check',
                '--disable-background-networking',
                '--disable-background-timer-throttling',
                '--disable-sync',
                '--disable-features=TranslateUI',
                '--user-data-dir=' + require('os').tmpdir() + '\\wdio-profile'
            ]
        },
        acceptInsecureCerts: true
    }],

    baseUrl: 'https://www.ebay.com', 
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 2,
    framework: 'cucumber',
    reporters: [['allure', {
        outputDir: 'allure-results',
        useCucumberStepReporter: true
    }]],

    cucumberOpts: {
        require: ['./features/stepDefinitions/**/*.js'],
        strict: true,
        tags: '@pilot',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
}