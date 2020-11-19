/// <reference types="cypress" />

describe('Locating the Element', () => {
    it('Verify Locators', () => {

    cy.visit('http://demo.nopcommerce.com/') //open the URL

    cy.get('#small-searchterms').type('Apple Macbook Pro 13-inch') //type in search box

    cy.get('[type = "submit"]').click() //click on search button

    cy.get('.product-box-add-to-cart-button[value="Add to cart"]').click() //click on add to cart button

    cy.get('#product_enteredQuantity_4').clear().type('2')

    cy.get('#add-to-cart-button-4').click()

    cy.wait(5000) //static wait

    cy.get('#topcartlink > a > span.cart-label').click() //click on cart

    cy.wait(3000)

    cy.get('.product-unit-price').contains('$1,800.00') //validation

})
})