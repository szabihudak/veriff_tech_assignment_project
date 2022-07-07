import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

import {testData} from "../../support/TestData"

Given(`I call {}, {} api with {} body`, (method, url, request) => {
    cy.request({
        method: method,
        body: testData.getRequests(request),
        url: url,
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.integrationUrl).to.eq(testData.integration_url)
        expect(response.body.sessionToken).to.exist
    })
})

Given(`I call {}, {} api with {} token`, (method, url, token) => {
    cy.request({
        method: method,
        headers:
            {
                Authorization: testData.getRequests(token)
            },
        url: testData.sessions_api_url,
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.id).exist
        expect(response.body.status).to.eq("created")
        expect(response.body.initData.language).to.eq(testData.request_body.lang)
        expect(response.body.initData.country).to.eq(testData.request_body.document_country)
        expect(response.body.initData.type).to.eq(testData.request_body.document_type)

    })
})

Given(`I check the complete session creation flow`, () => {
    cy.request({
        method: 'POST',
        body: testData.request_body,
        url: testData.application_url,
    }).then((response) => {
        expect(response.body.integrationUrl).to.eq(testData.integration_url)
        cy.request({
            method: 'GET',
            headers:
                {
                    Authorization: 'Bearer ' + response.body.sessionToken
                },
            url: testData.sessions_api_url,
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).exist
            expect(response.body.status).to.eq("created")
            expect(response.body.initData.language).to.eq(testData.request_body.lang)
            expect(response.body.initData.preselectedDocument.country).to.eq(testData.request_body.document_country)
            expect(response.body.initData.preselectedDocument.type).to.eq(testData.request_body.document_type)
        })
    })
})
















