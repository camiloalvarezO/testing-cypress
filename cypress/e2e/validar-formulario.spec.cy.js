/// <reference types="cypress"/>

describe('Validar el formulario',()=>{

    it('Submit al formulario y mostrar la alerta de error', ()=>{
        cy.visit('http://127.0.0.1:5500/testing-cypress/')
        // busco el elemento que tiene data-cy formulario y le hago submit
        cy.get('[data-cy="formulario"]').submit();
        // busco que haya un elemento que tenga data-cy alerta y que tenga el texto igual a .....
        cy.get('[data-cy="alerta"]').invoke('text').should("equal",'Todos los campos son Obligatorios')

        // busco un elementao con el atributo data-cy alerta y que tenga la clase alert-danger
        cy.get('[data-cy="alerta"]')
            .should('have.class','alert-danger')
        
        // se busca el elemento que tiene el atributo datacy-alerta y que tenga la clase alert-danger
            cy.get('[data-cy="alerta"]')
            .should('have.class','alert-danger')
            .invoke('text')
            .should('eq','Todos los campos son Obligatorios')
            
    })
} )