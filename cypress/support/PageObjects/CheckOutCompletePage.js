export class CheckOutCompletePage {

    getBackHomeImage() {
        return cy.get('#back-to-products')
    }

    getComppleteHeader() {
        return cy.get('.complete-header')
    }

    getComppleteText() {
        return cy.get('.complete-text')
    }

    getPonyExpressImage() {
        return cy.get('.pony_express')
    }

}

export const checkOutCompletePage = new CheckOutCompletePage()