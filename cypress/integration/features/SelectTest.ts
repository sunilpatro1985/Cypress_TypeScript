describe("Cypress dropdown", () => {
    xit("cy dropdown select element single selction", ()=> {
        cy.visit('https://qavbox.github.io/demo/signup')
        cy.get('[name=\'sgender\']').select('na').invoke('val').then((value) =>{
            cy.log('selected value - ' + value)
            //expect
        }) //selecting based on value

        cy.get('[name=\'sgender\']').find('option:selected').should('have.text', 'Not Applicable')

        cy.get('[name=\'sgender\']').select('na').find('option:selected').invoke('text').then((textvalue) =>{
            cy.log('selected text - ' + textvalue)
            //expect
        })

        cy.wait(2000)
        cy.get('[name=\'sgender\']').select('Female').should('have.value', 'female') //selecting based on the text
        cy.wait(2000)
    })


    xit("cy dropdown select element multiple selction", ()=> {
        cy.visit('https://qavbox.github.io/demo/signup')
        cy.get('#tools').select('qtp').invoke('val').then((value) =>{
            cy.log('selected value - ' + value)
            //expect
        }) //selecting based on value

        cy.wait(2000)
        /*cy.get('#tools').select(['QTP', 'TestStackWhite', 'Selenium']).invoke('val').then((value) =>{
            console.log(value)
        })*/

        cy.get('#tools').select(['QTP', 'TestStackWhite', 'Selenium']).find('option:selected').each(($el) =>{
            /*cy.wrap($el).invoke('val').then((value)=>{
                cy.log(value)
            })*/

            cy.wrap($el).invoke('text').then((text)=>{
                cy.log(text)
            })
        })

        cy.get('#tools').select(['QTP', 'TestStackWhite', 'Selenium']).invoke('val').should('deep.equal', ['qtp', 'selenium', 'white'])
       
        cy.wait(2000)
    })

 /*it("cy dropdown select element single selction", ()=> {
        cy.visit('https://qavbox.github.io/demo/signup')
        /*cy.get('[name=\'sgender\'] option').eq(2).then(($valu) => {
            cy.wrap($valu).parent('select').select($valu.val())
        })*/
        /*cy.get('[name=\'sgender\'] option').eq(2).as('value')
        cy.get('[name=\'sgender\']').select(cy.get('@value').invoke('val'))
        cy.wait(2000)
    })*/
})