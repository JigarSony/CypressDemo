/// <reference types="cypress" />

describe('Navigation', () => {

    it('Navigating back and forward', () => {
        cy.visit('http://testautomationpractice.blogspot.com/')

        cy.get('table[name="BookTable"]').should('be.visible').contains('td','Learn Selenium')

        cy.get('table[name="BookTable"] > tbody > :nth-child(2) > :nth-child(3)').should('be.visible').contains('Selenium')

        cy.get('table[name="BookTable"] > tbody > tr td:nth-child(2)').each(($e,index,$list) => {
            var authorText = $e.text()
            if (authorText.includes("Amod")) {
                cy.get('table[name="BookTable"] > tbody > tr td:nth-child(1)').eq(index).then((bname) => {
                    var bookName = bname.text()
                    expect(bookName).to.equal("Master In Java")
                })
            }
        })
        })
})
