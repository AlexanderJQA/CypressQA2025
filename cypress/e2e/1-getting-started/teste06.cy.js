
describe('Modificar la respuesta de una peticion', ()=> {
    it("Interceptar y simular una peticion", ()=> {
        cy.intercept('GET', 'https://www.google.com/search*', {
            statusCode: 200,
            body: '<htmall><body>busqueda en google</h1></body></htmall>',
        }).as('searchGoogle')

        cy.visit('https://www.google.com')
        cy.get('button').contains('Rejeitar tudo').click({ force: true })
        cy.get('#APjFqb').type('Cypress intercept example{enter}', { force: true })
        cy.wait('@searchGoogle')
        cy.contains('busqueda en google').should('exist') // pruebas avanzadas// 



     } )
} )

