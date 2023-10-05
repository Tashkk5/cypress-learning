/// <reference types="Cypress" />

describe('Assignment 1 tasks', () => {
  beforeEach('', () => {
    cy.viewport('macbook-16');
    cy.visit('https://dev.thingshub.smartmakers.de/ui/');
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

  });



  it('Should navigate to tenant settings page by clicking on gear icon', () => {
    cy.wait(4000);
    // test data

    // elements of test case
    const gearIconElement = cy.get('.thub-setting-icon');
    const expectedGearMatchingUrl = 'tenant-settings/users'
    // actions
    gearIconElement.should('be.visible').click()

    //match expectations
    const Tenantsettingheading = cy.get('.col-3 > thub-page-title > .d-flex > .title > .page-title')
    Tenantsettingheading.should('contain.text', 'Tenant Settings');


  });
  it('should open adduser modal by clicking on add user button', () => {
    // testdata
    // elements of test case
    const gearIconElement = cy.get('.thub-setting-icon');
    const expectedNewuserButton = cy.get('.btn > .ng-star-inserted');


    // actions
    gearIconElement.should('be.visible').click();
    expectedNewuserButton.click()

    //match expectations
    const expectAdduserHeading = cy.get('.mat-dialog-title > .m-0')
    expectAdduserHeading.should('contain.text', 'Create New User');

  })

})


