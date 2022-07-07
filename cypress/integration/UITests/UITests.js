import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import {configurationPage} from "../../support/PageObjects/ConfigurationPage"

import {testData} from "../../support/TestData"
import {init} from "../../support/Init";

before(function () {
    cy.visit(testData.getApplicationURL())
});

afterEach(function () {
    cy.visit(testData.getApplicationURL())
});

Given(`I check the title of the {} label`, (title) => {
    configurationPage.getFieldTitle(name)
})

Given(`I check is the page title is {}`, (page_title) => {
    configurationPage.getPageTitle().should('be.visible')
        .should('have.text', page_title)
})

When(`I set {} as a full name`, (full_name) => {
    configurationPage.getFieldByName(init.field_names.NAME).clear()
        .type(full_name)
})

Given(`I see full name field`, () => {
    configurationPage.getFieldByName(init.field_names.NAME).should("be.visible", 'true')
})

When(`I set {} as language`, (language) => {
    configurationPage.getFieldByName(init.field_names.LANGUAGE).click()
    configurationPage.getListItem(language).click({force: true})
})

Given(`I see session language filed`, () => {
    configurationPage.getFieldByName(init.field_names.LANGUAGE).should('have.text', 'Select a language')
})

When(`I set {} as document country`, (document_country) => {
    configurationPage.getFieldByName(init.field_names.DOCUMNET_COUNTRY).click()
    configurationPage.getListItem(document_country).click({force: true})
})

Given(`I see the document country field`, () => {
    configurationPage.getFieldByName(init.field_names.DOCUMNET_COUNTRY).invoke('attr', 'placeholder')
        .should('contain', 'Type a country')
})

When(`I set {} as document type`, (document_type) => {
    configurationPage.getFieldByName(init.field_names.DOCUMNET_TYPE).click()
    configurationPage.getListItem(document_type).click({force: true})
})

Given(`I see the document type field`, () => {
    configurationPage.getFieldByName(init.field_names.DOCUMNET_TYPE).should('have.text', 'Select a document')
})

When(`I set {} as Launch Veriff via`, (launch_type) => {
    configurationPage.getRadioButton(launch_type).click()
})

Given(`I see {} radio button`, (launch_type) => {
    configurationPage.getRadioButton(launch_type)
})

Then(`I click on {} button on {}`, (title, source) => {
    if (source === init.source.PAGE) {
        configurationPage.getButtonByTitle(title).click({force: true})
    } else if (source === init.source.IFRAME) {
        configurationPage.getButtonByTitleFromIframe(title).click({force: true})
    }
})

Given(`I reload page`, () => {
    cy.reload()
})

Then(`I see {} button on {}`, (title, source) => {
    if (source === init.source.PAGE) {
        configurationPage.getButtonByTitle(title).should('be.visible','true')
    } else if (source === init.source.IFRAME) {
        configurationPage.getButtonByTitleFromIframe(title).should('be.visible','true')
    }
})

Then(`I click on {} link on {}`, (title, source) => {
    if (source === init.source.PAGE) {
        configurationPage.getLinkByTitle(title).should('be.visible')
            .invoke('attr', 'target', '_self')
            .click({force: true})
    } else if (source === init.source.IFRAME) {
        configurationPage.getLinkByTitleFromIframe(title).should('be.visible')
            .invoke('attr', 'target', '_self')
            .click({force: true})
    }
})

Given(`I close the {}`, (source) => {
    if (source === init.source.PAGE) {
        configurationPage.getCloseButton().click()
    } else if (source === init.source.IFRAME) {
        configurationPage.getCloseButtonFromIframe().click()
    }
})


Then(`I check the content of the {} is {} on {}`, (content_type, content, source) => {
    let content_to_check
    switch (content_type) {
        case 'title':
            if (source === init.source.PAGE) {
                content_to_check = configurationPage.getTitle()
            } else if (source === init.source.IFRAME) {
                content_to_check = configurationPage.getTitleFromIframe()
            }
            break
        case 'sub title':
            if (source === init.source.PAGE) {
                content_to_check = configurationPage.getSubTitle()
            } else if (source === init.source.IFRAME) {
                content_to_check = configurationPage.getSubTitleFromIframe()
            }
            break
        case 'paragraph':
            if (source === init.source.PAGE) {
                content_to_check = configurationPage.getParagraphContent(content)
            } else if (source === init.source.IFRAME) {
                content_to_check = configurationPage.getParagraphContentFromIframe(content)
            }
            break
    }
    content_to_check
        .should('be.visible')
        .should('have.text', content)
})

Then(`I check if the content of the {}. {} is {} on {}`, (number, content_type, content, source) => {
    let content_to_check
    switch (content_type) {
        case 'highligthed sub title':
            if (source === init.source.PAGE) {
                content_to_check = configurationPage.getHighLigthedSubTitle(number, content)
            } else if (source === init.source.IFRAME) {
                content_to_check = configurationPage.getHighLigthedSubTitleFromIframe(number, content)
            }
            break
        case 'highligthed paragraph':
            if (source === init.source.PAGE) {
                content_to_check = configurationPage.getHighLightedParagraphContent(number, content)
            } else if (source === init.source.IFRAME) {
                content_to_check = configurationPage.getHighLightedParagraphContentFromIframe(number, content)
            }
            break
    }
    content_to_check
        .should('be.visible')
        .should('have.text', content)
})

Then('I check if QR Code appeares on {}', (language, source) => {
    if (source === init.source.PAGE) {
        configurationPage.getQRCode().should('be.visible', 'true')
    } else if (source === init.source.IFRAME) {
        configurationPage.getQRCodeFromIframe().should('be.visible', 'true')
    }
})






