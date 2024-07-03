/// <reference types="cypress"/>

describe('Crea una nueva cita y se edita', () => {
    it('creando nueva cita', () => {
      cy.visit('http://127.0.0.1:5500/testing-cypress/')

      cy.get('[data-cy="nombre"]')
        .type('mondongo')
      cy.get('[data-cy="propietario"]')
        .type('knekro')
      cy.get('[data-cy="tel"]')
        .type('343')
      cy.get('[data-cy="fecha"]')
        .type('2024-07-02')
      cy.get('[data-cy="hora"]')
        .type('10:00')
      cy.get('[data-cy="sintomas-textarea"]')
        .type('mimido zzz')
      cy.get('[data-cy="submit"]')
        .click()


        // eliminando la cita
        
        cy.get('[data-cy="btnEliminar"]')
            .click()
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('eq','Cita eliminada correctamente')

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('eq','No hay Citas, comienza creando una')
    });
    
    
});