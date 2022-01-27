///<reference types = 'cypress' />

//---------------------------Login Command--------------------------------
Cypress.Commands.add('login', (email, password) => { 
    cy.visit(Cypress.env('registrationPage'));

    const navigateToLogin = cy.get('.col-register-text > .btn');
    navigateToLogin.click();

    const inputEmail = cy.get('.col-login > .login > .form-row-username > #username');
    inputEmail.clear();
    inputEmail.type(email);
    
    const inputPassword = cy.get('.password-input > #password');
    inputPassword.clear();
    inputPassword.type(password);

    const clickOnLogin = cy.get('.col-login > .login > :nth-child(3) > .button');
    clickOnLogin.click();

})

//---------------------------Logout Command--------------------------------
 Cypress.Commands.add('logout', () => { 
    cy.get('.woocommerce-MyAccount-navigation > ul > .woocommerce-MyAccount-navigation-link--customer-logout > a').click();
 })


 //----------------------------Reset password command-------------------------------

 Cypress.Commands.add('resetPassword', (email) => { 
    cy.visit(Cypress.env('registrationPage'));

    const navigateToLogin = cy.get('.col-register-text > .btn');
    navigateToLogin.click();

    const lostYourPassword = cy.get('.col-login > .login > .login-form-footer > .woocommerce-LostPassword');
    lostYourPassword.click();

    const inputEmail = cy.get('#user_login');
    inputEmail.clear();
    inputEmail.type(email);
    return this;

    // const clickOnReset = cy.get('.woocommerce-Button');
    // clickOnReset.click();
 })