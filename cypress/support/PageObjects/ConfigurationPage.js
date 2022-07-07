export class ConfigurationPage {

    getButtonByTitle(title) {
        return cy.get('button:contains(' + title + ')')
    }

    getButtonByTitleFromIframe(title) {
        return cy.iframe().find('button:contains(' + title + ')')
    }

    getCloseButton() {
        return cy.get('button[aria-label="Exit"]')
    }

    getCloseButtonFromIframe() {
        return cy.iframe().find('button[aria-label="Exit"]')
    }

    getFieldByName(name) {
        return cy.get('[name="' + name + '"]')
    }

    getFieldTitle(title) {
        return cy.get('span[class="Label-module_label__a_AEs"]:contains(' + title + ')')
    }

    getHighLightedParagraphContent(number, title) {
        return cy.get('dd').eq(Number(number)-1)
    }

    getHighLightedParagraphContentFromIframe(number, title) {
        return cy.iframe().find('dd').eq(Number(number)-1)
    }

    getHighLigthedSubTitle(number, title) {
        return cy.get('dt').eq(Number(number)-1)
    }

    getHighLigthedSubTitleFromIframe(number, title) {
        return cy.iframe().find('dt').eq(Number(number)-1)
    }

    getLinkByTitle(title) {
        return cy.get('a:contains(' + title + ')')
    }

    getLinkByTitleFromIframe(title) {
        return cy.iframe().find('a:contains(' + title + ')')
    }

    getListItem(title) {
        return cy.get('li span:contains(' + title + ')')
    }

    getPageTitle() {
        return cy.get('h3[class="text-center m-b"]')
    }

    getParagraphContent(title) {
        return cy.get('p:contains(' + title + ')')
    }

    getParagraphContentFromIframe(title) {
        return cy.iframe().find('p:contains(' + title + ')')
    }

    getQRCode() {
        return cy.get('div[class="qjgvn0v"]')
    }

    getQRCodeFromIframe() {
        return cy.iframe().find('div[class="qjgvn0v"]')
    }

    getRadioButton(value) {
        return cy.get('[type="radio"][ value="' + value + '"]')
    }

    getSubTitle(number) {
        return cy.get('h2')
    }

    getSubTitleFromIframe(number) {
        return cy.iframe().find('h2')
    }

    getTitle() {
        return cy.get('h1')
    }

    getTitleFromIframe() {
        return cy.iframe().find('h1')
    }

}

export const configurationPage = new ConfigurationPage()