// domonios cruzados
// problema previo
// solo podias manejar un domonio principal
// cy.origin dominio real


describe('manejo de dominios cruzados con cy origin', () => {
    it('iinteratuar con dominio distinto', () =>{
        cy.visit('https://example.com');
        cy.log("visitando example.com")
        




        cy.origin('https://the-internet.herokuapp.com/', () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.log("visitando the-internet.herokuapp.com")
        cy.get('h1').should('contain.text', 'Welcome to the-internet')
        cy.log("find h1")
        
    })
})

})