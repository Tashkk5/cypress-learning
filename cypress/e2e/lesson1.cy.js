/// <reference types="Cypress" />
describe('Login functionality of ThingsHub', () => {

  beforeEach('', () => {
    cy.viewport('macbook-16');
    cy.visit('localhost:4200/ui/login');
  });
  
  it('should open the thinghub login page', () => {
    const myName = 'Tashfeeen';

    myName.slice(1,5)
  })

  it('should show an error message if we login with empty username', () => {
    // expected test data
    const expectedPasswordValue = 'learntotest123';

    // elements of test case
    const passwordElement = cy.get('#password');
    const loginButton = cy.get(`button[class='btn btn-block btn-primary']`);

    // action
    passwordElement.type(expectedPasswordValue);
    loginButton.click();


    //match expectation
    const errorMessageElement = cy.get('.alert.alert-danger.th-mt-4.th-mb-4');
    errorMessageElement.should('contain.text', 'Must provide username and password!')
  });

  it('should show an error message if we login with empty password', () => {
    // expected test data
    const expectedUsernameValue = 'admin';

    // elements of test case
    const usernameElement = cy.get('#username');
    const loginButton = cy.get(`button[class='btn btn-block btn-primary']`);

    // action
    usernameElement.type(expectedUsernameValue);
    loginButton.click();


    //match expectation
    const errorMessageElement = cy.get('.alert.alert-danger.th-mt-4.th-mb-4');
    errorMessageElement.should('contain.text', 'Must provide username and password!')
  });


  it('should show error if the credentials are incorrect', () => {
    // expected test data
    const invalidUsername = 'some-non-working-user';
    const invalidPassword = 'some dummy password';

    // elements of test case
    const usernameElement = cy.get('#username');
    const passwordElement = cy.get('#password');
    const loginButton = cy.get(`button[class='btn btn-block btn-primary']`);

    // action
    usernameElement.type(invalidUsername);
    passwordElement.type(invalidPassword)
    loginButton.click();

    cy.wait(2000);

    //match expectation
    const errorMessageElement = cy.get('.alert.alert-danger.th-mt-4.th-mb-4.ng-star-inserted');
    errorMessageElement.should('contain.text', 'invalid credentials')
  });


  it('should navigate to home page after login with correct credentials', () => {
    // test data
    const validUsername = 'tashfeen';
    const validPassword = 'leobardeen';
    const expectedMatchingUrl = '/home'

    // elements of test case
    const usernameElement = cy.get('#username');
    const passwordElement = cy.get('#password');
    const loginButton = cy.get(`button[class='btn btn-block btn-primary']`);

    // actions
    usernameElement.type(validUsername);
    passwordElement.type(validPassword);
    loginButton.click();

    // match expectations
    cy.wait(2000);
    const userNamePlaceholder = cy.get('.mat-menu-trigger.text-decoration-none');
    userNamePlaceholder.should('contain.text', 'Tashfeen');
    cy.url().should('contain.text', expectedMatchingUrl);
  });


})