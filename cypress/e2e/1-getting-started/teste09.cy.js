describe("Manejo de errrores timeouts", () => {
  it("Ajustar timeouts en cypress contenido dinamico", () => {
    cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1");
    cy.get('button').click();
    cy.wait(7000)
    cy.log("Esperando 7 segundos")
    cy.get('#finish > h4').should('contain.text', 'Hello World!').should('be.visible')
    

    
  })
})