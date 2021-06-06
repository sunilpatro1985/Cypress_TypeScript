describe("Async & sync", () => {
    xit("cy async", ()=> {
        console.log('Navigate to url')

        //console.log('enter username')
        setTimeout(() => {console.log('enter username');},2000);

        console.log('enter email')
    })


    xit("cy async", ()=> {
        console.log('navigate to url') //non cypress async
        cy.visit("https://qavbox.github.io/demo/signup"); //sync
        
        console.log('enter username')

        //cy.get('#username').type('qavbox')
        cy.get('#username').type('qavbox').then(()=>{
            console.log('then - enter email')
        })

        console.log('enter email')
        cy.get("#email").type("qavbox@gmail.com");
        
    })

    it("enter some value", ()=> {
        let str: any
        cy.visit("https://qavbox.github.io/demo/signup/");

        cy.get("#username").type("qavbox").invoke('val').then((myValue) => {
            str = myValue
            console.log("inside Then" + str)
        })

        console.log("Outside then" + str)
        cy.get("#email").type("qavbox@gmail.com");
    })


})