import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("the url is \\/", function () {
  cy.visit("/");
});

When("The user select Country to {string} and City to {string}", function () {
  cy.findByRole("combobox", { name: /Country/i }).select("Poland");
  cy.findByRole("combobox", { name: /City/i }).select("Cracow");
});

When("the user sets pickup and dropoff date to {string}", function () {
  cy.get("#pickup").type("2023-06-06");
  cy.get("#dropoff").type("2023-06-07");
});

Then(
  "The user clicks button and the search results are displayed",
  function () {
    cy.findByRole("button", { name: /Search/i }).click();
    cy.get(".btn").contains("Rent").first().should("exist");
  }
);
