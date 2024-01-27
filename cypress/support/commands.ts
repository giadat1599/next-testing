declare global {
  namespace Cypress {
    interface Chainable {
      getBySelector(
        selector: string,
        options?: Partial<
          Cypress.Loggable &
            Cypress.Timeoutable &
            Cypress.Withinable &
            Cypress.Shadow
        >
      ): Cypress.Chainable<JQuery<HTMLElement>>;
    }
  }
}

export {};
