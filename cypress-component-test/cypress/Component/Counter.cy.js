import React from 'react';
import Counter from '../../src/Counter';

describe('Prueba de componente', () => {
  it('Comprobar se componen counter se muestra', () => {
    cy.mount(<Counter />);
    cy.get('[data-testid="count"]').should('contain', 'count: 0');
    cy.get('[data-testid="increment"]').click();    
    cy.get('[data-testid="count"]').should('contain', 'count: 1');
  });
});