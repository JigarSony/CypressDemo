describe('My First Test', () => {
    it('Verify Title of The Page-Positive', () => {
      //expect(true).to.equal(true)
      cy.visit('http://demo.nopcommerce.com/')
      cy.title().should('eq','nopCommerce demo store')
    })

    it('Verify Title of The Page-Negative', () => {
        //expect(true).to.equal(true)
        cy.visit('http://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce store')
      })
  })