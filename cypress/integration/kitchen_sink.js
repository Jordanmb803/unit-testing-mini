describe('Kitchen sink website', () => {
    it('visits the correct site', () => {
        cy.visit('https://example.cypress.io')
    })
    it('finds the link type and clicks on it', () => {
        cy.contains('type').click();
        cy.url().should('include', '/commands/actions')
    })
    it('should submit a coupon code', () => {
        cy.get('#couponCode1').type('type stuff again');
        cy.get('.action-form').submit()
    })
})