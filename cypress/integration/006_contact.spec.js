///<reference types ='cypress'/>

import ContactPO from "../support/page_objects/ContactPO";

describe('Contact', ()=>{

    beforeEach('Run before each it block', ()=>{
        cy.visit(Cypress.env('contactPage'));
    })

    it('Contact form should be submitted successfully with valid credentials', ()=>{
        const contactpo = new ContactPO();
        contactpo.sendUsAnEmail('Testname','email@test.com','Test', 'Test Messsage');
        //contactpo.clickOnSend();
    })

    it('Contact form should not be submitted successfully with blank input credentials', ()=>{
        const contactpo = new ContactPO();
        contactpo.clickOnSend();
        cy.get('.wpcf7-response-output').contains('One or more fields have an error. Please check and try again.');

    })
})