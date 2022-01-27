class SocialPO{
    navigateToFacebook(){
        const facebook = cy.get('#text-13 > .textwidget > .menu > :nth-child(1) > a');
        facebook.click();

    }

    navigateToInstagram(){
        const instagram = cy.get('#text-13 > .textwidget > .menu > :nth-child(2) > a');
        instagram.click();
   
    }
}
export default SocialPO;