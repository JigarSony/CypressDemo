/// <reference types="cypress" />

describe('Fixture', () => {

    before(() => {
        // runs once before all tests in the block
        cy.log('****  This is SetUp block ********')
        cy.fixture('example').then(function (data) {
            this.data = data
        })
      })

    it('Fixture Demo Test', function () {

        cy.visit('https://admin-demo.nopcommerce.com/login')

        cy.get('#Email').clear().type(this.data.email1)
        cy.get('#Password').clear().type(this.data.password)
        cy.get('.login-button').click()

    })
})
