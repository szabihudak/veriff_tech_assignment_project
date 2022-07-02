export class CartPage {

    getCheckOutButton() {
        return cy.get('#checkout')
    }

    getContinueButton() {
        return cy.get('#continue-shopping')
    }

    getRemoveButton() {
        return cy.get('button[id^="remove"]')
    }

}

export const cartPage = new CartPage()