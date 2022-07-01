const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './cypress/reports/cucumber-json/',
    reportPath: './cypress/reports/cucumber-html/',
    metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Payconiq Tech Assignment Project'},
        ]
    }
});