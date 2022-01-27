class ContactPO{
    sendUsAnEmail(yourname, youremail, subject, message){
        const inputName = cy.get(':nth-child(2) > label > .wpcf7-form-control-wrap > .wpcf7-form-control');
        inputName.click();
        inputName.clear();
        inputName.type(yourname);

        const inputEmail = cy.get(':nth-child(3) > label > .wpcf7-form-control-wrap > .wpcf7-form-control');
        inputEmail.click();
        inputEmail.clear();
        inputEmail.type(youremail);

        const inputSubject = cy.get(':nth-child(4) > label > .wpcf7-form-control-wrap > .wpcf7-form-control');
        inputSubject.click();
        inputSubject.clear();
        inputSubject.type(subject);

        const inputMessage = cy.get(':nth-child(5) > label > .wpcf7-form-control-wrap > .wpcf7-form-control');
        inputMessage.click();
        inputMessage.clear();
        inputMessage.type(message);

        return this;
    }

    clickOnSend(){
        const send = cy.get(':nth-child(6) > .wpcf7-form-control');
        send.click();
    }
}
export default ContactPO;