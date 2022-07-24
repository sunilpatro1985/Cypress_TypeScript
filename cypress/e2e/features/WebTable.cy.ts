describe('Handling WebTables', function () {
  
    it('WebTables test case', function (){
        cy.visit("https://qavbox.github.io/demo/webtable/");
        
        //fetching table header data
        cy.get("#table01 thead tr th").should('have.length', '4')

        cy.get("#table01 thead tr th").each(($el) => {
            /*cy.wrap($el).invoke('text').then((text) =>{
                cy.log(text)
            })*/
            //cy.log($el.text())
        })

        //no of rows
        cy.get("#table01 tbody tr").should('have.length', '3')

        //fetch specific row data
        cy.get("#table01 tbody tr:nth-child(1) td").each(($el) => {
            /*cy.wrap($el).invoke('text').then((text) =>{
                cy.log(text)
            })*/
            //cy.log($el.text())
        })

        cy.get("#table01 tbody tr").eq(0).within(()=>{ //return 1st row
            cy.get('td').each(($el) =>{
                /*if($el.text() == 'QTP'){
                    cy.log('QTP text found')
                }
                cy.log($el.text())*/
            })
        })

        //fetch all cell data dynamically
        //perform certain operation based on matching cell data
        /*cy.get("#table01 tbody tr").each(($row) =>{
            cy.wrap($row).within(() =>{
                cy.get('td').each(($col) => {
                    //cy.log($col.text())
                    if($col.text() == 'Functional'){
                        cy.get('td').eq(0).click() //checkbox
                        //cy.get('[type=\'checkbox\']').click() //checkbox, but not depending on any column index
                        cy.get('td').eq(4).click() //delete button
                        //identify delete button and click
                    }
                })
            })
        })*/

        cy.get('#table01').contains('tr','GUI').within(() =>{
            cy.get('td').eq(0).click() //checkbox
            //cy.get('[type=\'checkbox\']').click() //checkbox, but not depending on any column index
            cy.get('td').eq(4).click() //delete button
            //identify delete button and click
        })

    });
 });