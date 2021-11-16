it("", () => {
    cy.visit("/")
    
    cy.get("#username").type("amir");
    cy.get("#password").type("Pass@123");
    cy.get("#submitBtn").click();

    cy.wait(1000)

    var Interest = Math.random();

    cy.get("#interest").type(Interest);
    cy.get("#submitBtn").click();

    
    cy.visit("/calculator");

    
  var t = parseInt(Math.random() * 10);
  var p = parseInt(Math.random() * 100000);

  
  cy.get("#P").type(p);
  cy.get("#t").type(t);
  cy.get("#submitBtn").click();

  
  var A = parseInt(p * (1 + Interest * t));
  var calculatedInterest = parseInt(A) - parseInt(p);
  
  cy.get("#A").contains(A);
  cy.get("#interest").contains(calculatedInterest);
})