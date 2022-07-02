export class Init {

    actions = {
        ADD: 'add',
        CANCEL: 'cancel',
        CHECK_OUT: 'check out',
        CONTINUE: 'continue',
        CONTINUE_SHOPPING: 'continue shopping',
        FINISH: 'finish',
        REMOVE: 'remove',
        REMOVE_ITEM: 'remove item'
    }
    button_titles = {
        ADD_TO_CART: 'Add to cart',
        CANCEL: 'Cancel',
        CONTINUE: 'Continue',
        CONTINUE_SHOPPING: 'Continue Shopping',
        FINISH: 'Finish',
        LOGIN: 'Login',
        LOGOUT: 'Logout',
        REMOVE: 'Remove',
        RESET_APP_STATE: 'Reset App State'
    }
    link_type = {
        PICTURE: 'picture',
        TITLE: 'title',
    }
    page_titles = {
        CHECKOUT_YOUR_INFORMATION: 'Checkout: Your Information',
        CHECKOUT_OVERVIEW: 'Checkout: Overview',
        YOUR_CART: 'Your Cart',
        PRODUCTS: 'Products',
    }
    sorting_orders = {
        NAME_A_TO_Z: 'Name (A to Z)',
        NAME_Z_TO_A: 'Name (Z to A)',
        PRICE_HIGH_TO_LOW: 'Price (high to low)',
        PRICE_LOW_TO_HIGH: 'Price (low to high)'
    }

}

export const init = new Init()
