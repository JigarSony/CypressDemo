/// <reference types="cypress" />

describe('Hooks', () => {

    before(() => {
        // runs once before all tests in the block
        cy.log('****  This is SetUp block ********')
      })
    
      beforeEach(() => {
        // runs before each test in the block
        cy.log('****  This is Login block ********')
      })
    
      afterEach(() => {
        // runs after each test in the block
        cy.log('****  This is Logout block ********')
      })
    
      after(() => {
        // runs once after all tests in the block
        cy.log('****  This is Tear Down block ********')
      })

    it('searching', () => {
        cy.log('****  In searching Test ********')
    })

    it('advance searching', () => {
        cy.log('****  In advance searching Test ********')
    })

    it('listing', () => {
        cy.log('****  In listing Test ********')
    })
})
