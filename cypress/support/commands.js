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

Cypress.Commands.add('login', (email, password) => { 
    cy.get('input#user-name').type(email);
    cy.get('input#password').type(password);    ``
    cy.get('input[type="submit"]').click();
    cy.log('loggedin')
 })

//with subject
Cypress.Commands.add('getText', { prevSubject: 'el' }, (el)  => {
    cy.wrap(el).invoke('text').then((text)=>{
        if(text === ''){
            cy.wrap(el).invoke('val')
        }else{
            cy.wrap(el).invoke('text')
        }
    })
})

 
  //subject optional
  Cypress.Commands.add('getLinks', {prevSubject: 'optional'}, (subject) => {
    if (subject) {
     cy.wrap(subject).then(($el)=>{
         cy.wrap($el).find('a')
        })
    }else {
       cy.get('a')
    }
  })

  //iframe
  Cypress.Commands.add('getIframe', (iframe) => {       
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    const clearedText = `{selectall}{backspace}${text}`;

  options = { ...options, log: false };

  Cypress.log({
    $el: element,
    name: "type",
    message: text,
  });
    return originalFn(element, clearedText, options);
  })
