///<reference types = 'cypress'/>

import SocialPO from "../support/page_objects/SocialPO"

describe('Social Links', ()=>{

    beforeEach('Run before all the test',() => {

        cy.visit('/')
      
      })

    it('Should be navigated to Facebook after clicking on the link', ()=>{
        const socialpo = new SocialPO();
        socialpo.navigateToFacebook();

    })

    it('Should be navigated to Instagram after clicking on the link', ()=>{
        const socialpo = new SocialPO();
        socialpo.navigateToInstagram();
    })
})