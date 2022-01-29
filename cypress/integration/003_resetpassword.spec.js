///<reference types ='cypress'/>

describe("Reset", ()=>{
    it('Reset password functionality should be worked successfully', ()=>{
        cy.resetPassword('nforget32@gmail.com');  //running from command
    })
})