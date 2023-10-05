/// <reference types="Cypress" />

function loginIntoThingsHub() {
  // test data
  const validUsername = 'admin';
  const validPassword = 'Sm@rtM@kers21';


  // elements of test case
  const usernameElement = cy.get('#username');
  const passwordElement = cy.get('#password');
  const loginButton = cy.get(`button[class='btn btn-block btn-primary']`);

  // actions
  usernameElement.type(validUsername);
  passwordElement.type(validPassword);
  loginButton.click();
}

function navigateToTenantSettings() {
  const gearIconElement = cy.get('.thub-setting-icon');
  gearIconElement.should('be.visible').click()
}

describe('Assignment 1 tasks', () => {
  beforeEach('', () => {
    cy.viewport('macbook-16');
    cy.visit('https://dev.thingshub.smartmakers.de/ui/');
    loginIntoThingsHub();
  });



  it('Should navigate to tenant settings page by clicking on gear icon', () => {

    // test data missing test data

    // elements of test case
    const gearIconElement = cy.get('.thub-setting-icon')

    // actions
    gearIconElement.click();

    //match expectations
    const tenantSettingsHeadingElement = cy.get('.col-3 > thub-page-title > .d-flex > .title > .page-title');
    tenantSettingsHeadingElement.should('contain.text', 'Tenant Settings');
  });

  it('should open add user modal by clicking on add user button', () => {
    // Pre test steps
    navigateToTenantSettings();

    //elements of test case
    const newUserButtonElement = cy.get('.btn > .ng-star-inserted');

    // actions
    newUserButtonElement.click();

    //match expectations
    const expectAddUserHeadingElement = cy.get('.mat-dialog-title > .m-0')
    expectAddUserHeadingElement.should('contain.text', 'Create New User'); // this should be in test data

  })



  it('should search username from search field', () => {
    // Pre test steps
    navigateToTenantSettings();

    // test data missing

    //elements of test case
    const searchUserInputFieldElement = cy.get('.form-control')

    // actions
    searchUserInputFieldElement.type('tashfeen') // test data

    //match expectations
    const usersTableCountLabelElement = cy.get('.mat-paginator-range-label');
    usersTableCountLabelElement.should('contain.text', '1 - 8 of 8');

  })

})

/**
 - Improper variable names
 - Missing test data
 - Code repetition
 - Miss semicolon
 */


