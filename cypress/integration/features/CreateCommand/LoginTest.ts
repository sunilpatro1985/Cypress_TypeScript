describe('sort', () => {

    xit('sort standard_user', () => {
  
      cy.visit('https://www.saucedemo.com/');
      cy.get('input#user-name').type('standard_user');
      //cy.get('input#password').type('secret_sauce');

      cy.get('input#user-name').getText().then((value: string) =>{
        cy.log(value)
      })
      cy.get('.login_password').getText().then((value: string) => {
        cy.log(value)
      })

      //cy.get('input[type="submit"]').click();
      //cy.get('.title')
    });

    xit('sort standard_user', () => {
  
      cy.visit('https://www.saucedemo.com/');
      cy.login('standard_user', 'secret_sauce')
      
      cy.get('.title')
    });    

    it('sort standard_user', () => {
  
      cy.visit('https://qavbox.github.io/demo/iframes/');
      cy.getLinks().should('have.length', '5')
      //cy.get('iframe[id=\'Frame2\']').getLinks().should('have.length', '1')
      //.getLinks().should('have.length', '1')
      
      /*cy.get('iframe[id=\'Frame2\']').its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap).getLinks().should('have.length', '1')*/
  /*cy.getIframe('iframe[id=\'Frame2\']').then(($el)=>{
        cy.wrap($el).getLinks().should('have.length', '1')
      })*/
      cy.getIframe('iframe[id=\'Frame2\']').getLinks().should('have.length', '1')
 
    });
      //cy.get('.title')

  
  
  });
  