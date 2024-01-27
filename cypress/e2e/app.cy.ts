describe("App", () => {
  it("should navigate to the todo page", () => {
    cy.visit("/");

    cy.getBySelector("todo-link").click();

    cy.url().should("include", "/todo");
  });

  it("should navigate to the home page", () => {
    cy.visit("/todo");

    cy.getBySelector("home-link").click();

    cy.url().should("include", "/");

    cy.contains("Home");
  });
});
