/// <reference types="cypress" />

describe('Alert', () => {
    it('HandlingAlert boxes', () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get('#content > div > ul > li:nth-child(1) > button').click()

        cy.on('window:alert',(str) => {
            expect(str).to.be.equal('I am a JS Alert')
        })

    })

    it('Confirmation Alert Handling', () => {
        cy.get('#content > div > ul > li:nth-child(2) > button').click()

        cy.on('window:confirm',(str) =>{
            expect(str).to.be.equal('I am a JS Confirm')
        })

    })
})