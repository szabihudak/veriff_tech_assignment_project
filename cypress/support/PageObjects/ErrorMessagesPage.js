export class ErrorMessagesPage {

    getErrorMessage() {
        return cy.get('h3')
    }

}

export const errorMessagesPage = new ErrorMessagesPage()