describe("Checks that the details are correct", () => {
  it("Check car details", () => {
    cy.visit("/");
    cy.Search();
    cy.get(".btn").contains("Rent").first().click();
    cy.get(".card-body > :nth-child(3)").should(
      "have.text",
      "Location: Poland, Cracow"
    );
    cy.findByRole("heading", { name: /Pickup date: 2023-06-06/i }).should(
      "exist"
    );
    cy.findByRole("heading", { name: /Dropoff date: 2023-06-07/i }).should(
      "exist"
    );
  });
});
