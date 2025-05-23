 describe('Pruebas de cypress', () => {
  it("visitar la pagina y marcar una tarea como terminada", () => {
    cy.visit("https://example.cypress.io/todo")
    cy.wait(500)

    cy.get('[data-test="new-todo"]').type("hola desde cypress")
    cy.get(':nth-child(1) > .view > .toggle').check()
  }) // Aquí termina el primer "it"

  it("visitar la pagina la segunda pagina ", () => {
    cy.visit("https://example.cypress.io/commands/actions")
    cy.get('.action-select-multiple > [value="fr-oranges"]')  }) //seleccion elemento en un desplegable//
})

.should() //