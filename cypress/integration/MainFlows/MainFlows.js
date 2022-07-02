import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import {loginPage} from "../../support/PageObjects/LoginPage"
import {inventoryPage} from "../../support/PageObjects/InventoryPage"
import {cartPage} from "../../support/PageObjects/CartPage"
import {checkOutPage} from "../../support/PageObjects/CheckOutPage"
import {checkOutOverviewPage} from "../../support/PageObjects/CheckOutOverviewPage"
import {checkOutCompletePage} from "../../support/PageObjects/CheckOutCompletePage"
import {errorMessagesPage} from "../../support/PageObjects/ErrorMessagesPage"
import {commonPage} from "../../support/PageObjects/CommonPage"

import {testData} from "../../support/TestData"
import {init} from "../../support/Init"


before(function () {
    cy.visit('https://www.saucedemo.com/',)
});

afterEach(function () {
    inventoryPage.getMenuButton().click({force: true})
    inventoryPage.getResetAppMenuPoint().should('have.text', 'Reset App State')
        .click({force: true})
    inventoryPage.getLogoutMenuPoint().should('have.text', 'Logout')
        .click({force: true})
});

Given(`I log in as {} user with {} password successful`, (user, password) => {
    loginPage.getUserInputField().clear()
        .type(user)
    loginPage.getPasswordInputField().clear()
        .type(password)
    loginPage.getLoginButton().should('have.value', 'Login')
        .click()
    commonPage.getPageTitle().should('have.text', 'Products')
})

Given(`I try to log in as {} user with {} password`, (user, password) => {
    if (user === 'NULL') {
        loginPage.getUserInputField().clear()
    } else if (user !== 'NULL') {
        loginPage.getUserInputField().clear()
            .type(user)
    }
    if (password === 'NULL') {
        loginPage.getPasswordInputField().clear()
    } else if (password !== 'NULL') {
        loginPage.getPasswordInputField().clear()
            .type(password)
    }
    loginPage.getLoginButton().should('have.value', 'Login')
        .click()
})

When(`I {} the {} item to-from the cart`, (action, item_title) => {
    if (action === init.actions.ADD) {
        inventoryPage.getItemButton(init.actions.ADD, item_title).should('have.text', 'Add to cart')
            .click()
    } else if (action === init.actions.REMOVE) {
        inventoryPage.getItemButton(init.actions.REMOVE, item_title).should('have.text', 'Remove')
            .click()
    }
})

When(`I open product page by clicking on {} and {} the {} item`, (link_type, action, item_title) => {
    if (link_type === init.link_type.TITLE) {
        inventoryPage.getInventoryItemName(item_title).click()
    } else if (link_type === init.link_type.PICTURE) {
        inventoryPage.getInventoryItemPicture(item_title).click()
    }
    if (action === init.actions.ADD) {
        inventoryPage.getItemButton(init.actions.ADD, item_title).should('have.text', 'Add to cart')
            .click()
    } else if (action === init.actions.REMOVE) {
        inventoryPage.getItemButton(init.actions.REMOVE, item_title).should('have.text', 'Remove')
            .click()
    }
    inventoryPage.getBackToProductsButton().click()
    commonPage.getPageTitle().should('have.text', 'Products')
})

When(`I check the cart - Item name: {} , item description: {} , price: {} -  and {}`, (item_name, item_description, item_price, action) => {
    inventoryPage.getShoppingChartButton().click()
    commonPage.getPageTitle().should('have.text', 'Your Cart')
    checkItem(item_name, item_description, item_price)
    if (action === init.actions.CHECK_OUT) {
        cartPage.getCheckOutButton().should('have.text', 'Checkout')
            .click()
    } else if (action === init.actions.REMOVE_ITEM) {
        cartPage.getRemoveButton().should('have.text', 'Remove')
            .click()
    } else if (action === init.actions.CONTINUE_SHOPPING) {
        cartPage.getContinueButton().should('have.text', 'Continue Shopping')
            .click()
        commonPage.getPageTitle('Products')
    }
})

Then(`I check the item overview - Item name: {} , item description: {} , price: {}`, (item_name, item_description, item_price) => {
    commonPage.getPageTitle().should('have.text', 'Checkout: Overview')
    checkItem(item_name, item_description, item_price)
})

Then(`I check the payment overview - Item total: {} , tax: {} , total: {}`, (item_total, tax, total) => {
    commonPage.getPageTitle().should('have.text', 'Checkout: Overview')
    checkOutOverviewPage.getItemTotal().should('have.text', item_total)
    checkOutOverviewPage.getSummaryTaxLabel().should('have.text', tax)
    checkOutOverviewPage.getSummaryTotal().should('have.text', total)
})

Then(`I open the cart and {}`, (action) => {
    inventoryPage.getShoppingChartButton().click()
    commonPage.getPageTitle().should('have.text', 'Your Cart')
    if (action === init.actions.CHECK_OUT) {
        cartPage.getCheckOutButton().should('have.text', 'Checkout')
            .click()
    } else if (action === init.actions.REMOVE_ITEM) {
        cartPage.getRemoveButton().should('have.text', 'Remove')
            .click()
    } else if (action === init.actions.CONTINUE_SHOPPING) {
        cartPage.getContinueButton().should('have.text', 'Continue Shopping')
            .click()
        commonPage.getPageTitle('Products')
    }
})

Then(`I check if the shopping cart badge shows {} selected element`, (number_of_elements) => {
    if (number_of_elements === '0') {
        inventoryPage.getShoppingChartBadge().should('not.exist')
    } else if (number_of_elements !== '0') {
        inventoryPage.getShoppingChartBadge().should('have.text', number_of_elements)
    }
})

Then(`I fill the checkout form with first name {} , last name {} and postal code {} and {}`, (first_name, last_name, postal_code, action) => {
    commonPage.getPageTitle().should('have.text', 'Checkout: Your Information')
    checkOutPage.getFirstNameField().type(first_name)
    checkOutPage.getLastNameField().type(last_name)
    checkOutPage.getPostalCodeField().type(postal_code)
    if (action === init.actions.CONTINUE) {
        checkOutPage.getContinueButton().should('have.value', 'Continue')
            .click()
    } else if (action === init.actions.CANCEL) {
        commonPage.getCancelButton().should('have.text', 'Cancel')
            .click()
        commonPage.getPageTitle('Your cart')
    }
})

Then(`I try to fill the checkout form with first name {} , last name {} and postal code {} and validate`, (first_name, last_name, postal_code) => {
    commonPage.getPageTitle().should('have.text', 'Checkout: Your Information')
    if (first_name === 'NULL') {
        checkOutPage.getFirstNameField().clear()
    } else if (first_name !== 'NUL') {
        checkOutPage.getFirstNameField().clear()
            .type(first_name)
    }
    if (last_name === 'NULL') {
        checkOutPage.getLastNameField().clear()
    } else if (last_name !== 'NUL') {
        checkOutPage.getLastNameField().clear()
            .type(last_name)
    }
    if (postal_code === 'NULL') {
        checkOutPage.getPostalCodeField().clear()
    } else if (postal_code !== 'NUL') {
        checkOutPage.getPostalCodeField().clear()
            .type(postal_code)
    }
    checkOutPage.getContinueButton().should('have.value', 'Continue').click()
    commonPage.getPageTitle('Checkout: Your Information')
})

Then(`I {} the checkout process`, (action) => {
    commonPage.getPageTitle().should('have.text', 'Checkout: Overview')
    if (action === 'finish') {
        checkOutOverviewPage.getFinishButton().should('have.text', 'Finish').click()
        commonPage.getPageTitle('Checkout: Complete!')
        checkOutCompletePage.getPonyExpressImage().should('be.visible', 'true')
        checkOutCompletePage.getComppleteHeader().should('have.text', 'THANK YOU FOR YOUR ORDER')
        checkOutCompletePage.getComppleteText().should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        checkOutCompletePage.getBackHomeImage().should('have.text', 'Back Home')
            .click()
    } else if (action === init.actions.CANCEL) {
        commonPage.getCancelButton().should('have.text', 'Cancel')
            .click()
    }
    commonPage.getPageTitle('Products')
})

Then(`I sort items by {}`, (order) => {
    inventoryPage.getItemSorter().select(order)
})

Then(`I wait {} sec`, (time) => {
    cy.wait(Number(time) * 1000)
})

Then(`I check if error message {} appears`, (error_message) => {
    errorMessagesPage.getErrorMessage().should('have.text', error_message)
})

Then(`I check the {} sort order`, (order) => {
    let reference_order
    if (order === init.sorting_orders.NAME_Z_TO_A) reference_order = testData.getItemTitlesZtoA()
    else if (order === init.sorting_orders.NAME_A_TO_Z) reference_order = testData.getItemTitlesAtoZ()
    else if (order === init.sorting_orders.PRICE_LOW_TO_HIGH) reference_order = testData.getItemPricesLowtoHigh()
    else if (order === init.sorting_orders.PRICE_HIGH_TO_LOW) reference_order = testData.getItemPricesHightoLow()
    if (order === init.sorting_orders.PRICE_LOW_TO_HIGH || order === init.sorting_orders.PRICE_HIGH_TO_LOW) {
        inventoryPage.getInventoryItemPriceList().each((element, index, list) => {
            expect(Cypress.$(element)).to.have.text(reference_order[index])
        })
    } else if (order === init.sorting_orders.NAME_A_TO_Z || order === init.sorting_orders.NAME_Z_TO_A) {
        inventoryPage.getInventoryItemTitleList().each((element, index, list) => {
            expect(Cypress.$(element)).to.have.text(reference_order[index])
        })
    }

})

function checkItem(item_name, item_description, item_price) {
    commonPage.getInventoryItemName().should('have.text', item_name)
    commonPage.getInventoryItemDesction().should('have.text', testData.getItemDescription(item_description))
    commonPage.getInventoryItemPrice().should('have.text', item_price)
}



