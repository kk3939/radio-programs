describe("check button routing", () => {
  it("from index to login page", () => {
    cy.visit("/");
    cy.get("button").click();
    cy.url().should("contain", "signIn");
  });
  it("from login page to index", () => {
    cy.visit("/signIn");
    cy.contains("radio programsとは？").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
