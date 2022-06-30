export class CheckOutPage {

    getContinueButton() {
        return cy.get('#continue')
    }

    getFirstNameField() {
        return cy.get('#first-name')
    }

    getLastNameField() {
        return cy.get('#last-name')
    }

    getPostalCodeField() {
        return cy.get('#postal-code')
    }

}

export const checkOutPage = new CheckOutPage()