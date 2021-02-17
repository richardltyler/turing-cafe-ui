describe('Turing Cafe', () => {
  const baseUrl = 'http://localhost:3000/';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should have a headline', () => {
    cy.get('h1')
      .contains('Turing Cafe Reservations');
  });

it('should display a form', () => {
  cy.get('form');
})
 it('should display a form with 4 input fields', () => {
   cy.get('form input')
    .its('length')
    .should('eq', 4);
 });

 it('should have an input for name', () => {
  cy.get('form input[name=name]');
 });

 it('should have an input for date', () => {
  cy.get('form input[name=date]');
 });

 it('should have an input for time', () => {
  cy.get('form input[name=time]')
 });

 it('should have an input for number of guests', () => {
  cy.get('form input[name=number]');
 });

 it('should have a button to make a reservation', ()=> {
   cy.get('form button');
 });


})