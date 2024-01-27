describe("Todo", () => {
  beforeEach(() => {
    cy.visit("/todo");
    cy.getBySelector("todo-input").type("To do 1");
    cy.getBySelector("todo-input").trigger("keydown", { key: "Enter" });
  });

  it("should be able to add to do item", () => {
    cy.getBySelector("todo-name").should("have.text", "To do 1");
  });

  it("should be able to delete a to do item", () => {
    cy.getBySelector("todo-actions-delete").click();
    cy.getBySelector("todo-name").should("not.exist");
  });

  it.skip("should be able to mark a to do item as completed", () => {
    cy.getBySelector("todo-actions-complete").click();
    cy.getBySelector("todo-name").should("have.class", "line-through");
  });
});
