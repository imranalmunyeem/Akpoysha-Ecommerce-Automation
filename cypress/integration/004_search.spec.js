///<reference types = 'cypress' />

import SearchPO from "../support/page_objects/SearchPO";

describe('Search', ()=>{

    beforeEach('Run before each', ()=>{
        cy.visit('/');
    })
    

    it('Search featured should provide correct output with valid data', ()=>{
        const searchpo = new SearchPO();
        searchpo.clickOnSearch('Food');
    })


    it('Search featured should not provide correct output with invalid data', ()=>{
        const searchpo = new SearchPO();
        searchpo.clickOnSearch('Invalid');
        cy.get('.woocommerce-info hidden-notice').contains('No products were found matching your selection.');
    })
})