describe('Turing Cafe', () => {
  const baseUrl = 'http://localhost:3000/';

  beforeEach(() => {
    cy.fixture('Reservations-data.json')
      .then(resys => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
          body: resys
        })
      });
    // so the body in a POST intercept should be the response from the api after a successful post. You can get this from a fixture, but I have not done it yet. I do have the data in the body in post_spec.json if you wanna try to figure it out how to use a fixture though
    cy.intercept('POST', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      body: { 
        "id": 18939837, 
        "name": "Leta", 
        "date": "12/3", 
        "time": "6:30", 
        "number": 2 
      }
    })

    //checkout the last it block below for notes on how I actually made the test 

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
      .type('2-17')
      .should('have.value', '2-17');
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

  it.only('should be able to add a new reservation', () => {
    cy.get('article')
    // here I'm testing the amount of reservations before making the POST
      .its('length').should('eq', 3);
    
    // my app is built to not allow the button to work without all the inputs having a value so skip to line 171 for the rest of the post testing
    cy.get('input[name=name]')
      .type('Richard');
    
    cy.get('input[name=date]')
      .type('2-20');
    
    cy.get('input[name=time]')
      .type('8:00');

    cy.get('input[name=number]')
      .type(5);
    
    cy.get('form button')
      .click();
    
    // here i'm testing that there is one additional reservation displayed on the dom. Since after the POST, we setState from the newRes rather than a whole ass GET (see App.js), and setState is only called if the response is ok, then there would only be one additional res on the DOM if the POST was successful 
    cy.get('article').should('have.length', 4)
  });
})