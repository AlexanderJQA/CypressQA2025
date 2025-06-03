describe('Prueba de comandos con login', () => {
    it('Iniciar sesión', () => {
        cy.visit("https://the-internet.herokuapp.com/login");
        cy.login("tomsmith", "SuperSecretPassword!");
        cy.get('#flash').should('contain', 'You logged into a secure area!');


    });
});
