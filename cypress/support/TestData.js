export class TestData {

    item_titles_A_to_Z = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
    item_titles_Z_to_A = ['Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Onesie', 'Sauce Labs Fleece Jacket', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Bike Light', 'Sauce Labs Backpack']
    item_prices_low_to_high = ['$7.99', '$9.99', '$15.99', '$15.99', '$29.99', '$49.99']
    item_prices_high_to_low = ['$49.99', '$29.99', '$15.99', '$15.99', '$9.99', '$7.99']
    item_description_sauce_labs_backpack = "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."

    getItemDescription(item) {
        let item_description
        switch (item) {
            case "item_description_sauce_labs_backpack":
                item_description = this.item_description_sauce_labs_backpack
        }
        return item_description
    }

    getItemTitlesAtoZ() {
        return this.item_titles_A_to_Z
    }

    getItemTitlesZtoA() {
        return this.item_titles_Z_to_A
    }

    getItemPricesLowtoHigh() {
        return this.item_prices_low_to_high
    }

    getItemPricesHightoLow() {
        return this.item_prices_high_to_low
    }

}

export const testData = new TestData()
