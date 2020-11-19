/// <reference types="cypress" />

import loginPage from './pageObjects/loginPage'

describe('Page Object', () => {

    it('Valid Login via Page Object Pattern', function () {
        var lp = new loginPage()
        lp.visit()
        lp.enterUserName('admin@yourstore.com')
        lp.enterPassword('admin')
        lp.clickonLogin()

        cy.wait(3000)
        cy.title().should('be.eq','Dashboard / nopCommerce administration')
    })
})
