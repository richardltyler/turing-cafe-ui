describe('Turing Cafe', () => {
  const baseUrl = 'http://localhost:3000/';

  beforeEach(() => {
    cy.fixture('Reservations-data.json')
      .then(resys => {
        cy.intercept('http://localhost:3001/api/v1/reservations', {
          body: resys
        })
      });

    cy.visit(baseUrl);
  });

  it('should have a headline', () => {
    cy.get('h1')
      .contains('Turing Cafe Reservations');
  });

  it('should display a form', () => {
    cy.get('form');
  });

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

  it('should display reservation cards', () => {
    cy.get('section')
      .children()
      .its('length')
      .should('eq', 3);
  });

  it('should display res cards with a name', () => {
    cy.get('article')
    .get('h2')
    .contains('Christie');

    cy.get('article')
      .get('h2')
      .contains('Leta');

    cy.get('article')
      .get('h2')
      .contains('Pam');
  });

  it('should display res cards with a date', () => {
    cy.get('article')
      .get('h3')
      .contains('12/29');

    cy.get('article')
      .get('h3')
      .contains('4/5');

    cy.get('article')
      .get('h3')
      .contains('1/21'); 
  });

  it('should display res cards with a time', () => {
    cy.get('article')
      .get('h4')
      .contains('7:00pm');

    cy.get('article')
      .get('h4')
      .contains('7:00pm');

    cy.get('article')
      .get('h4')
      .contains('7:00pm'); 
  });

  it('should display res cards with a number of guests', () => {
    cy.get('article')
      .get('h5')
      .contains('Number of Guests: 12');

    cy.get('article')
      .get('h5')
      .contains('Number of Guests: 2');

    cy.get('article')
      .get('h5')
      .contains('Number of Guests: 4'); 
  });

  it('should be able to type into the name field', () => {
    cy.get('input[name=name]')
      .type('Richard')
      .should('have.value', 'Richard');
  });

  it('should be able to type into the date field', () => {
    cy.get('input[name=date]')
      .type('02/17')
      .should('have.value', '02/17');
  });

  it('should be able to type into the time field', () => {
    cy.get('input[name=time]')
      .type('8:00')
      .should('have.value', '8:00');
  });

  it('should be able to type into the number of guests field', () => {
    cy.get('input[name=number]')
      .type('4')
      .should('have.value', '4');
  });
})