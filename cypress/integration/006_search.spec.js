///<reference types = 'cypress' />

import SearchPO from "../support/page_objects/SearchPO";

describe('Search', ()=>{
    it('Search featured should provide correct output with valid data', ()=>{
        cy.visit('/');
        const searchpo = new SearchPO();
        searchpo.clickOnSearch('Food');
    })


    it('Search featured should not provide correct output with invalid data', ()=>{
        cy.visit('/');
        const searchpo = new SearchPO();
        searchpo.clickOnSearch('Invalid');
        cy.get('.woocommerce-info hidden-notice').contains('No products were found matching your selection.');
    })
})