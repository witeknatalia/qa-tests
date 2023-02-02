describe("Check that the required data in form is correct", () => {
    it("", () => {
        cy.visit("/");
        cy.Search();
        cy.get(".btn").contains("Rent").first().click();
        cy.get(".btn").contains("Rent!").should("exist").click();

        //check if error is displayed
        cy.get("#name").type("This is more than fifty characters!!!!!!!!!!!!!!!!!");
        cy.get("#last_name").type(
            "This is more than fifty characters!!!!!!!!!!!!!!!!!"
        );
        cy.get("#card_number").type("12345678901234567890123456");
        cy.get("#email").type("testexample.com");
        cy.get(".btn").contains("Rent").should("exist").click();

        //errors
        cy.get("#rent_form").contains("Name value is too long").should("exist");
        cy.get("#rent_form")
            .contains("Last name value is too long")
            .should("exist");
        cy.get("#rent_form").contains("Please provide valid email").should("exist");
        cy.get("#rent_form")
            .contains("Card number value is too long")
            .should("exist");
    });
});
