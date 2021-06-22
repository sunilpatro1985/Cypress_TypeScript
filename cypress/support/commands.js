// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//parent command, cy.login()
Cypress.Commands.add('login', (email, password) => { 
  cy.get('input#user-name').type(email);
  cy.get('input#password').type(password);
  cy.get('input[type="submit"]').click();
})

Cypress.Commands.add('getIframe', (iFrameLocator) => { 
  cy.get(iFrameLocator).its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
})


//dual commnad, cy.get('').getLinks() or cy.getLinks()
Cypress.Commands.add('getLinks', { prevSubject: 'optional'}, (subject) => { 
  if(subject){
    cy.wrap(subject).then(($el) =>{ //cy.get("someEle").getLinks()
      cy.wrap($el).find('a')
    })
  } else{
    cy.get('a') //cy.getLinks()
  }
})

//child, cy.get('').gettext()
Cypress.Commands.add('getText', { prevSubject: 'element'}, (element, options) => { 
    cy.wrap(element).invoke('text').then((text) =>{
        if(text === ''){
          cy.wrap(element).invoke('val')
        }else{
          cy.wrap(element).invoke('text')
        }
    })
})


Cypress.Commands.overwrite('type', (originalFn, element, text, options) => { 
  const clearedText = `{selectAll}{backspace}${text}`;
  options = {...options, log: false};
  return originalFn(element, clearedText, options)
 })

