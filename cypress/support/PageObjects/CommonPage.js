export class CommonPage {

    getCancelButton() {
        return cy.get('#cancel')
    }

    getInventoryItemDesction() {
        return cy.get('.inventory_item_desc')
    }

    getInventoryItemName() {
        return cy.get('.inventory_item_name')
    }

    getInventoryItemPrice() {
        return cy.get('.inventory_item_price')
    }

    getPageTitle() {
        return cy.get('.title')
    }
}

export const commonPage = new CommonPage()