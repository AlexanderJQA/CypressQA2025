const viewports = {
  mobile: [375, 667],
  tablet: [768, 1024],
  desktop: [1280, 720],
};


describe ('Primera Prueba' ,() => {

it("visitar la pagina",() => {

  cy.task('getUserViewport').then((viewport) => {
    cy.viewport(...viewport);
  });

  cy.wait(500);
  
  cy.visit('https://example.cypress.io/todo')

  cy.window().then((win) => {
    if (win.innerWidth < 1024) {
      cy.log('El viewport es móvil');
    } else {
      cy.get(':nth-child(1) > :nth-child(2) > a').click();
       // cy.get('.pull-right > li > a').click();
       cy.wait(500);
        cy.go('back');
        cy.wait(500);
        cy.get('.dropdown-toggle').click();
        cy.wait(500);
        cy.get(':nth-child(4) > a').click();
        cy.wait(1000)
    }
  });


//  cy.get('.todo-list li').first().get(".toggle").last().click()
  cy.get('.toggle') // Ajusta el selector según tu estructura
  .each(($el) => {
    cy.wrap($el).click();
    cy.wait(500);
  });

  cy.screenshot('teste02')

});

});
