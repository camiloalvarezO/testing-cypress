describe('Carga la pagina principal', () => {
  it('Carga la pagina principal', () => {
    cy.visit('http://127.0.0.1:5500/testing-cypress/')

    cy.contains('h1','Administrador de Pacientes de Veterinaria')

    cy.get('h1').should('exist')
  })
})