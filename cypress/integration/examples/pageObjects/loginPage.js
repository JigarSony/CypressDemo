/// <reference types="cypress" />

class loginPage {
    
    visit(){
        cy.login('admin@yourstore.com','admin')
    }

    enterUserName(value){
        const email = cy.get('#Email')
        email.clear()
        email.type(value)
        return this
    }

    enterPassword(value){
        const password = cy.get('#Password')
        password.clear()
        password.type(value)
        return this
    }

    clickonLogin(){
        const btnLogin = cy.get('.login-button')
        btnLogin.click()
    }
}
export default loginPage