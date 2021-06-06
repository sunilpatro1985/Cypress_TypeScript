describe("Async & sync", () => {

    it("fetch properties or attributes of a browser element", ()=> {
        cy.visit("https://qavbox.github.io/demo/signup"); //sync
        
        //to fetch the entered text from text box
        cy.get('input[value=\'TestingBasics\']').invoke('prop', 'name').then( (myValue:any) => {
            cy.log(myValue)
            //expect todo
        })


        cy.contains('Tutorials!').invoke('prop','href').then( (myValue:any) => {
            cy.log(myValue)
            //expect todo
        })

    })
    
    
    xit("fetch text from browser element", ()=> {
        cy.visit("https://qavbox.github.io/demo/signup"); //sync
        
        //to fetch the entered text from text box
        cy.get('#lblname').invoke('text').then( (myValue:any) => {
            cy.log(myValue)
            //expect todo
        })

        cy.get('#lblname').should('have.text', 'Full Name')

    })
    xit("Text Box fetch value or entered text", ()=> {
        cy.visit("https://qavbox.github.io/demo/signup"); //sync
        
        //to fetch the entered text from text box
        cy.get('#username').type('qavbox').invoke('val').then( (myValue:any) => {
            cy.log(myValue)
            //expect todo
        })

        cy.get('#username').clear().type('qavbox').should('have.value', 'qavbox')

    })
})