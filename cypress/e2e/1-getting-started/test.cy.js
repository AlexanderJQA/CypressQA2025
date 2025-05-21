 describe('Pruebas de cypress',() => {
    it("visitar la pagina y marcar una tarea como terminda",()=>{
    cy.visit("https://example.cypress.io/todo")
    cy.get('.todo-list li').first().get(".toggle").first().click()
 })
})
