describe('Turing Cafe', () => {
  const baseUrl = 'http://localhost:3000/';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it.only('should have a headline', () => {
    cy.get('h1')
      .contains('Turing Cafe Reservations');
  });


})