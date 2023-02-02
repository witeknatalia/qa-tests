import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("the url is default", function () {
    cy.visit("/");
});

When("The user select Country and City", function () {
    cy.SelectCountryAndCity();
});

When("The user sets pickup and dropoff date", function () {
    cy.get("#pickup").type("2023-06-06");
    cy.get("#dropoff").type("2023-06-07");
});

When("The user check car", function () {
    cy.findByRole("button", { name: /Search/i }).click();
    cy.get(".btn").contains("Rent").first().click();
});

Then("The display details are correct with search result", function () {
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
