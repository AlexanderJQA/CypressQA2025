describe('login and loguot', ()=> {
    it("Validar iniciar sesion y cerrar sesion", ()=> {
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('#login').submit()
        cy.url().should('eq', 'https://the-internet.herokuapp.com/secure')
        cy.get('#flash').should('contain', 'You logged into a secure area!')
        cy.get('.button').click()
        cy.url().should('eq', 'https://the-internet.herokuapp.com/login')
    
} )


} )