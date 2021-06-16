describe("Cypress contains", () => {
    xit("cy contains method", ()=> {
        cy.visit('https://qavbox.github.io/demo/signup')
        //cy.contains('Full name', {matchCase: false}) //ignore the case sensitivity
        //cy.get('[href=\'http://www.qavalidation.com\']')
        //or
        //cy.contains('Tutorials').click()

        cy.get('footer').contains('qavalidation').click()
    })  
    it("cy contains method", ()=> {
        cy.visit('https://qavbox.github.io/demo/listitems/')

        cy.contains('span','List Item 1')
    })  
})