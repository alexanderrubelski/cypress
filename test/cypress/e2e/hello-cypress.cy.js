/// <reference types="cypress"/>
Cypress.on('uncaught:exception', () => false);
it('cypress training', () => {
    cy.visit('https://www.cypress.io/subscribe/');
    cy.get('#subscribe_email').type('test');
    cy.wait(5000);

   cy.get('#subscribe_email').should('have.text', 'test');

    

    
    
    
    //cy.get('.group > .icon-dark-gray-400').click();
});