// domonios cruzados
// problema previo
// solo podias manejar un domonio principal
// cy.origin dominio real


describe('manejo de dominios cruzados con cy origin', () => {
    it('iinteratuar con dominio distinto', () =>{
        cy.visit('https://example.com');




        cy.origin('https://www.google.com', () => {
        cy.visit('https://www.google.com');
        cy.get('h1').should('contain', 'Google');
    })
})

})