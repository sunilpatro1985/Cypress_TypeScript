declare namespace Cypress {
    interface Chainable {
      login(email: string, password: string): void //as the method doesn't return, so void
      getLinks(): Chainable<Element>
      getText(): any
      type(text: string, options?: Partial<Cypress.TypeOptions>): Cypress.Chainable<JQuery<HTMLElement>>
    }
  }
