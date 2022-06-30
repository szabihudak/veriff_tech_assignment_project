export class LoginPage {

    getLoginButton() {
        return cy.get('#login-button')
    }

    getPasswordInputField() {
        return cy.get('#password')
    }

    getUserInputField() {
        return cy.get('#user-name')
    }

}

export const loginPage = new LoginPage()