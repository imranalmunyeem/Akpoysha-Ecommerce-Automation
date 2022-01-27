///<reference types = 'cypress' />

import AddressPO from "../support/page_objects/AddressPO";

 describe('Footer Area', ()=>{
     it('Address should be displayed in footer area', ()=>{
         cy.visit('/');
         const addresspo = new AddressPO();
         addresspo.footerArea();
     })
 })