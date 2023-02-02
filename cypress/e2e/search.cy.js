describe("Enter required data and check search results", () => {
  it("Enter search data", () => {
    cy.visit("/");
    cy.Search();
  });
});
