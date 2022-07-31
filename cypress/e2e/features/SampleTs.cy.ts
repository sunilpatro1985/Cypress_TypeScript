describe("Reg form", () => {
    xit("enter some value", ()=> {
        cy.visit("https://qavbox.github.io/demo/signup/");
        cy.get("#username").type("qavbox");
        cy.get('input[name=\'home\']').click();
        /*cy.visit("https://qavbox.github.io/demo/listitems/");
        cy.get('#mygroup > li').should('have.length', 4);
        cy.get('#mygroup li').should('have.length', 5);
        expect(cy.get('#mygroup li')).to.have.lengthOf(4);*/
    })

    it("cy get options", ()=> {
        //cy.visit("https://qavbox.github.io/demo/signup/");
        cy.visit("https://qavbox.github.io/demo/delay/");
        //cy.get('input.EnterText').type("QAVBOX");
        //cy.get('input.EnterText', {log:false, timeout: 1000}).type("QAVBOX");
        //cy.get('input[name=\'home\']').click();
        cy.get('input[name=\'commit1\']', {log: false}).click();
        cy.get('#delay', {timeout: 6000}).should('have.text','I appeared after 5 sec');
    })

    xit("cy get withinsubject", ()=> {
        cy.visit("https://qavbox.github.io/demo/signup/");
        cy.get('#username', {withinSubject : document.getElementById('container')}).type("QAVBOX");
    })

    xit("cy get multiple elements", ()=> {
        cy.visit("https://qavbox.github.io/demo/listitems/");
        cy.get('#mygroup ~ p').eq(1).should('have.text', " Paragraph 2 ");
    })

    xit("cy get find", ()=> {
        cy.visit("https://qavbox.github.io/demo/webtable/");
        cy.get('table').find('thead',{timeout: 6000}).find('th').should('have.length', '4');
    })

    xit("cy async", ()=> {
        cy.visit("https://qavbox.github.io/demo/signup");
        let str: string = ""
        //str = cy.get('#username').type('qavbox').invoke('val')
        cy.get('#username').type('qavbox').invoke('val').then((value: string) =>{
            str = value
            cy.log('Inside : value is - '+str) //later
        })
        cy.log('Outside : value is - '+str) //later
        expect(str).to.contain('qavbox')
        //console.log('Outside : value is - '+str) //dev tools > console
    })
    
    xit("cy async alias", ()=> {
        cy.visit("https://qavbox.github.io/demo/signup");
        var str: any
        
        /*cy.get('#username').type('qavbox').invoke('val').then((myvalue) => {
            str = myvalue
            cy.log('Inside : value is - '+str)
        })*/
        cy.get('#username').type('qavbox')
        str = cy.get('#username').invoke('val')
        cy.get('#username').invoke('val').then((myvalue: string) =>{
            str = myvalue
            console.log("inside "+str)
        })
        //or
        /*cy.get('#username').type('qavbox').invoke('val').as('value')
        
        cy.get('@value').then((myvalue) =>{
            str = myvalue
            cy.log('Inside : value is - '+str)
        })*/

        //cy.log('outside : value is - '+str)
        console.log('outside : value is - '+str)

    })
    
    xit("cy async", ()=> {
        cy.visit("https://qavbox.github.io/demo/signup");
        console.log('navigated to url')
        cy.get('#username', {timeout: 5000}).type('qavbox').then(()=>{
            console.log('entered username')
        })
        console.log('entered username')
        cy.get("#email").type("qavbox@gmail.com");
        console.log('entered email')
    })
})
