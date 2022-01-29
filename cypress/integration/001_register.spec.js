import RegisterPO from '../support/page_objects/RegisterPO'  //Running from page object
///<reference types = 'cypress'/>

describe('Register', ()=>{
    it('Create a new profile', ()=>{
        cy.visit(Cypress.env('registrationPage'));
        const registerpo = new RegisterPO();
        registerpo.createUser('nforget32@gmail.com', '123456');
        registerpo.registerButton();
        cy.logout();
    })


})