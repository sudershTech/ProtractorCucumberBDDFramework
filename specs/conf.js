
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    capabilities: {
        'browserName' : 'chrome'
    },
    specs: [
        'features/*.feature'
      ],

      plugins: [{
        //package: 'protractor-multiple-cucumber-html-reporter-plugin',
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options:{
            // read the options part for more options
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
    }],

    onPrepare: function () {
      browser.manage().window().maximize();
    
    },

    cucumberOpts: {
        require: ['support/timeout.js', 'StepDefinition/*.js'],
        tags: false,
        format: 'json:.tmp/results.json',
        //format: 'pretty',
        profile: false,
        'no-source': true
      },

      params:
      {
         url:'https://login.salesforce.com/',
         DashboardTitle: 'Home | Salesforce',
         username: 'sudershs@interrait.com',
         password: 'sudersh123',
         LoginFailureMessage: "Please check your username and password. If you still can't log in, contact your Salesforce administrator."
      }

  };