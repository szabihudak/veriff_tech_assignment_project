export class CartPage {

    getCheckOutButton() {
        return cy.get('#checkout')
    }

    getContinueButton() {
        return cy.get('#continue-shopping')
    }

    getRemoveButton() {
        return cy.get('#remove-sauce-labs-backpack')
    }

}

export const cartPage = new CartPage()