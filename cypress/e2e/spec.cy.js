/// <reference types="cypress"/>

describe('Carga la pagina principal', () => {
  it('Carga la pagina principal', () => {
    cy.visit('http://127.0.0.1:5500/testing-cypress/')

    //verificar el elemento y su texto
    cy.contains('[data-cy="titulo-proyecto"]','Administrador de Pacientes de Veterinaria')
    
    //verificar que el elemento exista
    cy.get('[data-cy="titulo-proyecto"]').should('exist')

    //verificar que exista el elemento y contenga el texto, invoke selecciona el text
    cy.get('[data-cy="titulo-proyecto"]').invoke('text').should('equal', 'Administrador de Pacientes de Veterinaria')

    cy.get('[data-cy="citas-heading"]').invoke('text').should('equal',"No hay Citas, comienza creando una")

    cy.get('[data-cy=citas-heading]').invoke('text').should('not.eq',"No hay Citas, comienza creando una")
  })
})