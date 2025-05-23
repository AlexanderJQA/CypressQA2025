/// <reference types="cypress" />

describe('Pruebas de cypress', () => {
    it("Visitar la página, marcar tareas y tomar captura", () => {
        cy.visit("https://example.cypress.io/todo")
        cy.get('.toggle').each(($el) => {
            cy.wrap($el).click()
        })

        // Espera para ver el resultado y tomar la captura
        cy.wait(1000)
        cy.screenshot('tareas-marcadas')
    })
})


