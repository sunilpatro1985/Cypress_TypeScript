describe("Cypress contains", () => {
    it("cy contains method", ()=> {
        cy.visit('https://qavbox.github.io/demo/iframes/')

        cy.getIframe('#Frame1').find('#frametext')
        cy.getIframe('#Frame2').find('#frameinput').type('qavbox')
        cy.contains('qavbox')
    })  
})