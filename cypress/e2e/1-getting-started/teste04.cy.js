describe('Rellenar un formulario QA', () => {
    it("Validar Formulario QA",()=> {
        cy.visit("https://example.cypress.io/commands/actions")
        cy.get('#couponCode1').wait(1500).type("102358")
        cy.get('.action-form').submit()
        cy.get(':nth-child(14) > .well > :nth-child(2)').should('contain', 'Your form has been submitted!') // Validar el mensaje que muestra luego de hacer el submit//
        
 
    })



   })
