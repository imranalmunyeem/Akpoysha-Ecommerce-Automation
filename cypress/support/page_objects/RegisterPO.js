class RegisterPO{
    createUser(email, password){
        const inputEmail = cy.get('#reg_email');
        inputEmail.clear();
        inputEmail.type(email);

        const inputPassword = cy.get('#reg_password');
        inputPassword.clear();
        inputPassword.type(password);

        return this;
    }

    registerButton(){
        const regButton = cy.get('.woocommerce-Button');
        regButton.click();
    }
}
export default RegisterPO;