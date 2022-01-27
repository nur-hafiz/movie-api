// Some of these tests are bad and I will comment why I think they're bad
// Generally:
// 1. I think the tests that sets the component's data is not very good, because it doesn't actually follow a user flow
// 2. Tests that wait are bad, I only have them because I haven't figured out a way to intercept API requests
// So we don't know if the wait is long enough for the requests to finish
// Instead, I should mock a response instead of making an actual API call

describe("My First Test", () => {
  it("Disables previous-page button when at page 1", () => {
    cy.visit("/");
    cy.window().then((win) => {
      const component = win.HomeComponent;
      component.page = 1;
      cy.get(".pagination__button--first").should(
        "have.class",
        "pagination__button--disabled"
      );
    });
  });

  it("Disables first-page button when at page 1", () => {
    cy.visit("/");
    cy.window().then((win) => {
      const component = win.HomeComponent;
      component.page = 1;
      cy.get(".pagination__button--first").should(
        "have.class",
        "pagination__button--disabled"
      );
    });
  });

  it("Loads 10 items on getMovies()", () => {
    cy.visit("/");
    cy.window().then((win) => {
      const component = win.HomeComponent;
      component.list = [];
      component.getMovies();
    });
    cy.get(".list").find(".list__item").should("have.length", 10);
  });

  it("Goes to next page when next page button is clicked", () => {
    cy.window().then((win) => {
      const component = win.HomeComponent;
      component.page = 1;
      cy.get(".pagination__button--next").click();
      cy.get(".pagination__page").should("have.text", "2");
    });
  });

  it("Enables previous-page button after first page", () => {
    cy.get(".pagination__button--previous").should(
      "have.class",
      "pagination__button--enabled"
    );
  });

  it("Enables first-page button after first page", () => {
    cy.get(".pagination__button--first").should(
      "have.class",
      "pagination__button--enabled"
    );
  });

  it("Goes to last page when last page button is clicked", () => {
    cy.window().then((win) => {
      const component = win.HomeComponent;
      cy.get(".pagination__button--last").click();
      cy.get(".pagination__page").should(
        "have.text",
        String(component.lastPage)
      );
    });
  });

  it("Removes next page button when at last page", () => {
    cy.get(".pagination__button--next").should(
      "have.class",
      "pagination__button--disabled"
    );
  });

  it("Removes last page button when at last page", () => {
    cy.get(".pagination__button--last").should(
      "have.class",
      "pagination__button--disabled"
    );
  });

  // Why this is a bad test
  // 1. Does not check if the items get might NOT contain the keyword or check for capitalization
  it("Should show movie containing search input keyword", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get('[data-test="searchbar"]').type("Syndrome");
    cy.wait(1000);
    cy.get(".list__item").contains("Syndrome");
  });

  it("Show No movies found when there are no favourited movies", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get('[data-test="list-view-toggler"]').click();
    cy.wait(1000);
    cy.contains("p", "No movies found");
  });

  it("Show favourited movie", () => {
    cy.get('[data-test="list-view-toggler"]').click();
    cy.get(".list .list__item:first-child a.star").click();
    cy.get('[data-test="list-view-toggler"]').click();
    cy.get(".list").find(".list__item").should("have.length", 1);
  });
});
