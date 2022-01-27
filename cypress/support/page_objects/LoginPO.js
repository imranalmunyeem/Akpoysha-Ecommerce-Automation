// class LoginPO{
//     clickOnLogin(){
//         const loginButton = cy.get('.col-register-text > .btn');
//         loginButton.click();
//     }

//     inputCredentials(email, password){
//         const inputEmail = cy.get('.col-login > .login > .form-row-username > #username');
//         inputEmail.clear();
//         inputEmail.type(email);

//         const inputPassword = cy.get('.password-input > #password');
//         inputPassword.clear();
//         inputPassword.type(password);
//         return this;
//     }

//     submit(){
//         const submit = cy.get('.col-login > .login > :nth-child(3) > .button');
//         submit.click();
//     }
// }
// export default LoginPO;