/// <reference types="cypress" />

describe('UI Elements1', () => {
    it('Hobbies and Check boxes', () => {

    cy.visit('http://demo.automationtesting.in/Register.html')

    cy.get('#checkbox1').should('be.visible').check().should('be.checked').and('have.value','Cricket')
    cy.get('#checkbox2').should('be.visible').check().should('be.checked').and('have.value','Movies')
    cy.get('#checkbox3').should('be.visible').check().should('be.checked').and('have.value','Hockey')

    cy.get('#checkbox1').uncheck()
    cy.get('#checkbox2').uncheck()
    cy.get('#checkbox3').uncheck()

    cy.get('input[type=checkbox]').check(['Cricket','Hockey'])
    })

    it('Skill Dropdown', () => {
    cy.get('#Skills').select('Android').should('have.value','Android')
    })

    it('Language Multi Select', () => {
    cy.get('#msdd').click()
    cy.get('.ui-corner-all').contains('English').click()
    cy.get('.ui-corner-all').contains('Japanese').click()
    })

    it('Editable dropdown', () => {
    cy.get('.select2-selection').click({force : true})
    cy.get('.select2-search__field').type('India')
    cy.get('.select2-search__field').type('{enter}')
    })
})