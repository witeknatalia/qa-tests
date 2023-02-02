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

Cypress.Commands.add("SelectCountryAndCity", () => {
  cy.findByRole("combobox", { name: /Country/i }).select("Poland");
  cy.findByRole("combobox", { name: /City/i }).select("Cracow");
});

Cypress.Commands.add("SearchAndSelectCar", () => {
  cy.SelectCountryAndCity();
  cy.get("#pickup").type("2023-06-06");
  cy.get("#dropoff").type("2023-06-07");
  cy.findByRole("button", { name: /Search/i }).click();
  cy.get(".btn").contains("Rent").first().should("exist");
  cy.get(".btn").contains("Rent").first().click();
  cy.get(".btn").contains("Rent!").should("exist").click();
});
