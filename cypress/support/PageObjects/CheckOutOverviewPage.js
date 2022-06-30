export class CheckOutOverviewPage {

    getFinishButton() {
        return cy.get('#finish')
    }

    getItemTotal() {
        return cy.get('.summary_subtotal_label')
    }

    getSummaryTaxLabel() {
        return cy.get('.summary_tax_label')
    }

    getSummaryTotal() {
        return cy.get('.summary_total_label')
    }

}

export const checkOutOverviewPage = new CheckOutOverviewPage()