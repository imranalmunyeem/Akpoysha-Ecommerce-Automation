///<reference types = 'cypress'/>

import SearchPO from "../support/page_objects/SearchPO";

 describe('Cart Section', ()=>{
     it('Navigate to login', ()=>{
        cy.login('nforget32@gmail.com', '123456'); //running from command
        
     })
     it('Search for product and click on it', ()=>{
         const searchpo = new SearchPO();
         searchpo.clickOnSearch('chicken breast');
        cy.get('.autocomplete-suggestion').click();
     })

     //N.B: didn't create any page object for cart feature since the products will keep changing
    //  it('Select Quantity', ()=>{
    //     cy.get('.cart > .quantity > .plus').click();
    //  })

    //  it('Click on Add to cart', ()=>{
    //     cy.get('.single_add_to_cart_button').click();
    //  })

    //  it('Click on View Cart', ()=>{
    //     cy.get('.btn-cart').click();
    //  })

    //  it('Click on procceed to checkout', ()=>{
    //     cy.get('.checkout-button').click();
    //  })
 })