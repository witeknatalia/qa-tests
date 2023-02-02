import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("The form is displayed", function () {
    cy.visit("/");
});

When("Previous steps are done", function () {
    cy.SearchAndSelectCar();
});

When("The user fill in all required inputs not in accordance with the requirements", function () {
    cy.get("#name").type("This is more than fifty characters!!!!!!!!!!!!!!!!!");
    cy.get("#last_name").type(
        "This is more than fifty characters!!!!!!!!!!!!!!!!!"
    );
    cy.get("#card_number").type("12345678901234567890123456");
    cy.get("#email").type("testexample.com");
    cy.get(".btn").contains("Rent").should("exist").click();
});

Then("The errors should be visible", function () {
    cy.get("#rent_form").contains("Name value is too long").should("exist");
    cy.get("#rent_form")
        .contains("Last name value is too long")
        .should("exist");
    cy.get("#rent_form").contains("Please provide valid email").should("exist");
    cy.get("#rent_form")
        .contains("Card number value is too long")
        .should("exist");
});
