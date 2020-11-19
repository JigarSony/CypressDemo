/// <reference types="cypress" />

describe('Custom Commands', () => {

    it('Login Test', () => {
        cy.login('admin@yourstore.com','admin')
        cy.title().should('be.eq','Dashboard / nopCommerce administration')
        // cy.visit('https://admin-demo.nopcommerce.com/login')

        // cy.get('#Email').clear().type('admin@yourstore.com')
        // cy.get('#Password').clear().type('admin')
        // cy.get('.login-button').click()

        cy.login('admin@yourstore123.com','admin') //Invalid username
        cy.title().should('be.eq','Your store. Login')

        cy.login('admin@yourstore.com','admin12') //Invalid password
        cy.title().should('be.eq','Your store. Login')
    })

    it('Adding Customer Test', () => {
        cy.login('admin@yourstore.com','admin')
        cy.title().should('be.eq','Dashboard / nopCommerce administration')
        // cy.visit('https://admin-demo.nopcommerce.com/login')

        // cy.get('#Email').clear().type('admin@yourstore.com')
        // cy.get('#Password').clear().type('admin')
        // cy.get('.login-button').click()

        cy.log('Adding Customer ...........')
    })

    it('Editing Customer Test', () => {
        cy.login('admin@yourstore.com','admin')
        cy.title().should('be.eq','Dashboard / nopCommerce administration')
        // cy.visit('https://admin-demo.nopcommerce.com/login')

        // cy.get('#Email').clear().type('admin@yourstore.com')
        // cy.get('#Password').clear().type('admin')
        // cy.get('.login-button').click()

        cy.log('Editing Customer ...........')
    })
})
