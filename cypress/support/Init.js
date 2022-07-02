export class Init {

    actions = {
        ADD: 'add',
        CANCEL: 'cancel',
        CHECK_OUT: 'check out',
        CONTINUE: 'continue',
        CONTINUE_SHOPPING: 'continue shopping',
        REMOVE: 'remove',
        REMOVE_ITEM: 'remove item'
    }
    link_type = {
        PICTURE: 'picture',
        TITLE: 'title',
    }
    sorting_orders = {
        NAME_A_TO_Z: 'Name (A to Z)',
        NAME_Z_TO_A: 'Name (Z to A)',
        PRICE_HIGH_TO_LOW: 'Price (high to low)',
        PRICE_LOW_TO_HIGH: 'Price (low to high)'
    }

}

export const init = new Init()
