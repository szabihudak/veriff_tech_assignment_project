export class InventoryPage {

    getBackToProductsButton() {
        return cy.get('#back-to-products')
    }

    getInventoryItemName(item_title) {
        return cy.contains(item_title)
    }

    getInventoryItemPicture(item_title) {
        return cy.get('img[alt="' + item_title + '"]')
    }

    getInventoryItemPriceList() {
        return cy.get('.inventory_item_price')
    }

    getInventoryItemTitleList() {
        return cy.get('.inventory_item_name')
    }

    getItemButton(action, item_title) {
        let locator
        switch (item_title) {
            case 'Sauce Labs Backpack':
                locator = 'sauce-labs-backpack'
                break;
            case 'Sauce Labs Bike Light':
                locator = 'sauce-labs-bike-light'
                break;
            case "Sauce Labs Bolt T-Shirt":
                locator = 'sauce-labs-bolt-t-shirt'
                break;
            case "Sauce Labs Fleece Jacket":
                locator = 'sauce-labs-fleece-jacket'
                break;
            case "Sauce Labs Onesie":
                locator = 'sauce-labs-onesie'
                break;
            case "Test.allTheThings() T-Shirt (Red)":
                locator = 'test.allthethings()-t-shirt-(red)'
                break;
        }
        if (action === 'add') {
            locator = '#add-to-cart-' + locator
        } else if (action === 'remove') {
            locator = '#remove-' + locator
        }
        return cy.get(locator)
    }

    getItemSorter() {
        return cy.get('.product_sort_container')
    }

    getLogoutMenuPoint() {
        return cy.get('#logout_sidebar_link')
    }

    getMenuButton() {
        return cy.get('#react-burger-menu-btn')
    }

    getResetAppMenuPoint() {
        return cy.get('#reset_sidebar_link')
    }

    getShoppingChartBadge() {
        return cy.get('.shopping_cart_badge')
    }

    getShoppingChartButton() {
        return cy.get('.shopping_cart_link')
    }

}

export const inventoryPage = new InventoryPage()