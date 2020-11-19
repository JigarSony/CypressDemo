/// <reference types="cypress" />

describe('UI Elements', () => {
    it('Verify Inputbox and Radio buttons', () => {

        cy.visit('http://demo.guru99.com/test/newtours/index.php')

        cy.url().should('include','newtours')

        cy.get('input[name="userName"]').should('be.visible').should('be.enabled').type('mercury')
        cy.get('input[name="password"]').should('be.visible').should('be.enabled').type('mercury')

        cy.get('div > input').should('be.visible').click()

        cy.get(':nth-child(2) > [width="80"] > a').click()

        cy.title().should('eq','Find a Flight: Mercury Tours:')

        cy.get('input[value="roundtrip"]').should('be.visible').should('be.checked')
        cy.get('input[value="oneway"]').should('be.visible').should('not.be.checked').click()

        cy.get('[name="findFlights"]').should('be.visible').click()

        cy.title().should('eq','Find a Flight: Mercury Tours:')
    })
})