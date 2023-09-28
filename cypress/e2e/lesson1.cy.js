describe('Login functionality of ThingsHub', () => {

  beforeEach('', () => {
    cy.viewport('macbook-16');
    cy.visit('https://dev.thingshub.smartmakers.de/ui/en/login');
  });
  
  it('should open the thinghub login page', () => {
    const myName = 'Tashfeeen';

    myName.slice(1,5)
  })

  it('should show an error message if we login with empty username', () => {
    // expected test data
    const expectUsernameValue = ' ';
    const expectedPasswordValue = 'learntotest123';

    // elements of test case
    const usernameElement = cy.get('#username');
    const passwordElement = cy.get('#password');
    const loginButton = cy.get(`button[class='btn btn-block btn-primary']`);

    // action
    usernameElement.type(expectUsernameValue);
    passwordElement.type(expectedPasswordValue);
    loginButton.click();


    //match expectation
    const errorMessageElement = cy.get('.alert.alert-danger.th-mt-4.th-mb-4');

    errorMessageElement.should('exist');



  });


  it('should show an error message if password is empty')
  it('should disable login button if username is empty')
  it('should disable login button if password is empty')


})