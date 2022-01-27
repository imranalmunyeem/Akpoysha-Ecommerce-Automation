///<reference types ='cypress'/>

import AboutPO from "../support/page_objects/AboutPO";

describe('About', ()=>{
    it('About us section contains the description about the business', ()=>{
        cy.visit('/');
        const aboutpo = new AboutPO();
        aboutpo.clickOnAbout();
    })
})