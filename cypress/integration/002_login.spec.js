///<reference types = 'cypress'/>

import LoginPO from "../support/page_objects/LoginPO";

describe("Login", ()=>{


    it('Login should be successful with valid Credentials', ()=>{
        cy.login('ialmunyeem@gmail.com', 'akpoysha007'); //running from command
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').contains('From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.');
        cy.logout(); //running from command
    })

    it('Login should not be successful with invalid credentials', ()=>{
        cy.login('wrongemail', 'wrongpassword'); //running from command
        cy.get('.woocommerce-error').contains('Error: The username wrongemail is not registered on this site. If you are unsure of your username, try your email address instead.');
    })

})