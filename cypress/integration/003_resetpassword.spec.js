///<reference types ='cypress'/>

describe("Reset", ()=>{
    it('Reset password functionality should be worked successfully', ()=>{
        cy.resetPassword('ialmunyeem@gmail.com');  //running from command
    })
})