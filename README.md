# Veriff Tech Assignment Project

###Tech Stack
- Cypress TA framework, JS
- Cucumber and Cucumber reporter for BDD Gherkin layer

###Project Structure
- BDD Gherkin TC descriptions 
  - ./cypress/integration/APITests.feature
  - ./cypress/integration/UITests.feature
- Step definitions 
  - ./cypress/integration/APITests/APITests.js
  - ./cypress/integration/UITests/UITests.js
- Page Object models - ./cypress/support/PageObjects/ConfigurationPage.js (I created only one POM (there is no separate POM for Welcome page)
- Test data - ./cypress/support/TestData.js
- Scripts for test execution and reporting - ./package.json

###Install
- Open the veriff_tech_assignment_project
- Run 'npm install' for download and setup the necessary dependencies

###Test Execution
Run the following scripts form package.json or from terminal using the following format:
npm run {related script}

- Scripts for test execution:

    - execution with opened browser
        - execute-on-chrome
        - execute-on-firefox
        - execute-on-edge

    - execution with headless browser
        - execute-on-chrome-headless
        - execute-on-firefox-headless
        - execute-on-edge-headless

    - generating html report
        - generate-html-report

    - test execution and report generation 2 in 1
        - execute-on-chrome-report-cucumber
        - execute-on-firefox-report-cucumber
        - execute-on-edge-report-cucumber

    - Steps for test execution:
        - execute one test execution script, after that the reporting script.
            - for example:
                - npm run execute-on-edge
                - npm run generate-html-report
        - or, use the scripts from the last group which will execute the tests and create the reports as well
            - for example:
                - execute-on-chrome-report-cucumber

After the report creation you will find the BDD Cucumber HTML report in the ./cypress/reports/cucumber-html directory

###Limitations
The current Cypress version does not support Safari browser, test can run under Chrome, Firefox and Edge browsers. The browsers need to be installed.

###Bugs in the report and approach
- API Tests: 
  - I call the 2 APIs with inappropriate values as well, and I expect "normal" responses. In this way I would like to show how the failed test cases appear in the cucumber test report. So there will be 3 failed test cases as well.
  - I don't check the whole response object, just the most significant field values which are present in the request bodies as well.
- UI Tests: I could catch the 404 Error message in case of selecting Residence Permit :) , so there will be one failed TC (with screenshot) in this report as well



 