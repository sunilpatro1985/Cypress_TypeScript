describe("Reg form", () => {
    xit("valid login scenario", ()=> {
        cy.visit("https://www.saucedemo.com/");

        cy.get('input#user-name').type('standard_user');
        cy.get('input#password').type('secret_sauce');
        cy.get('input[type="submit"]').click();
       
        cy.get('.title')
    })

    xit("valid login - customCommandParent", ()=> {
        cy.visit("https://www.saucedemo.com/");

        cy.login('standard_user', 'secret_sauce');
     
        cy.get('.title');
        //to-do adding items cart
    })

    xit("customCommand dual child", ()=> {
        cy.visit("https://qavbox.github.io/demo/signup/");

        cy.getLinks().should('have.length', '4') //finding all a tags from root
     
        cy.get('fieldset').getLinks().should('have.length', '1'); ////finding all a tags from fieldset as parent element
     
    })

    xit("customCommand child", ()=> {
        cy.visit("https://www.saucedemo.com/");
        cy.get('input#user-name').type('standard_user');

        /*cy.get('input#user-name').invoke('val').then((value: string) =>{
            cy.log(value)
        })

        cy.get('.login_password h4').invoke('text').then((value: string) =>{
            cy.log(value)
        })*/

        cy.get('input#user-name').getText().then((value: string) =>{
            cy.log(value)
        })

        cy.get('.login_password h4').getText().then((value: string) =>{
            cy.log(value)
        })
        
       
    })

    it("customCommand child", ()=> {
        cy.visit("https://www.saucedemo.com/");
        cy.get('input#user-name').type('standard_user');
        cy.get('input#user-name').type('standard_user');
       
    })
})    