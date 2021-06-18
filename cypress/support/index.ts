declare namespace Cypress {
    interface Chainable {
      login(email: string, password: string): void //as the method doesn't return, so void
      getText(): any //as the method doesn't return, so void
      getLinks(): Chainable<Element>
      getIframe(iFrame: string): Chainable<Element>
      type(text: string, options?: Partial<Cypress.TypeOptions>): Cypress.Chainable<JQuery<HTMLElement>>
    }
  }