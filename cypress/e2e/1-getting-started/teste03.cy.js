describe('Alexander Automation', () => {
  beforeEach(() => {
    cy.visit("/");
  })

  it("Navega hacia la url dinamica y verifica el contenido", () => {
       cy.visit("/commands/actions") 
       cy.url().should("include", "/commands/actions") // validando que la ruta sea "Action"//
       cy.get("h1").should("contains.text", "Actions")

    // Aquí va tu prueba
  })

  it("Validar la segunda ruta",() => {
     cy.get('.dropdown-toggle').click()
     cy.get('.dropdown-menu > :nth-child(2) > a').click()
     cy.url().should("include", "/commands/traversal") // validando que la ruta sea "traversal"//
     cy.get("h1").should("contains.text", "Traversal")
     
     cy.screenshot("Foto de ruta")

    })




})
