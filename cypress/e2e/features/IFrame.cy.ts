describe("iframe handling", () => {
    xit("cy iframe", ()=> {
        cy.visit('https://qavbox.github.io/demo/iframes/')
        //cy.get('#frameinput').type('QAVBOX')
        cy.get('#Frame2').its('0.contentDocument.body').find('#frameinput').type('QAVBOX')
        cy.get('#Frame2').its('0.contentDocument.body').find('#frameinputtext')
        cy.get('#Frame2').its('0.contentDocument.body').contains('Category3').click()
        cy.get('#Frame1').its('0.contentDocument.body').find('#frametext')
        //https://github.com/cypress-io/cypress/issues/1433
    })
    it("cy iframe", ()=> {
        cy.visit('https://qavbox.github.io/demo/iframes/')
        cy.getIframe('#Frame2').find('#frameinput').type('QAVBOX')

        cy.get('#input1').type('qavalidation')
        //cy.getIframe('#Frame2').contains('Category3').click()
    
        //https://github.com/cypress-io/cypress/issues/1433
    })
})