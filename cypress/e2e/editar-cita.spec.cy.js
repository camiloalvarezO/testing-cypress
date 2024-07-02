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


        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('eq','Administra tus Citas')

            cy.get('[data-cy=alerta]')
            .should('have.class','alert-success')

            cy.get('[data-cy=alerta]')
            .invoke('text').should('eq','Se agregó correctamente')
        
            cy.get('[data-cy=test-editar]')
            .click()

            cy.get('[data-cy=nombre]')
                .clear()
                .type('jeje goz')

            cy.get('[data-cy=tel]')
                .type('543674')

            cy.get('[data-cy=fecha]')
                .clear()
                .type('2024-07-03')
            
            cy.get('[data-cy=hora]')
                .clear()
                .type('06:00')

            cy.get('[data-cy=sintomas-textarea]')
                .type(' y debe vacunarse')

            cy.get('[data-cy=submit]')
                .click()

            cy.get('[data-cy=alerta]')
                .invoke('text')
                .should('eq','Se agregó correctamente')

            cy.get('[data-cy=alerta]')
                .invoke('text')
                .should('eq','Se agregó correctamente')
    });

    
});