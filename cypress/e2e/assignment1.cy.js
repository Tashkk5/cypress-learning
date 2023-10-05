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

    // test data

    // elements of test case
    const gearIconElement = cy.get('.thub-setting-icon')

    // actions
    gearIconElement.click();

    //match expectations
    const Tenantsettingheading = cy.get('.col-3 > thub-page-title > .d-flex > .title > .page-title')
    Tenantsettingheading.should('contain.text', 'Tenant Settings');


  });
  it('should open adduser modal by clicking on add user button', () => {
    // Pre test steps
    const gearIconElement = cy.get('.thub-setting-icon');
    gearIconElement.should('be.visible').click()
    const Tenantsettingheading = cy.get('.col-3 > thub-page-title > .d-flex > .title > .page-title')
    Tenantsettingheading.should('contain.text', 'Tenant Settings');


    //elements of test case
    const expectedNewuserButton = cy.get('.btn > .ng-star-inserted');
    // actions
    expectedNewuserButton.click()

    //match expectations
    const expectAdduserHeading = cy.get('.mat-dialog-title > .m-0')
    expectAdduserHeading.should('contain.text', 'Create New User');

  })



  it('should search username from search field', () => {
    // Pre test steps
    const gearIconElement = cy.get('.thub-setting-icon');
    gearIconElement.should('be.visible').click()
    const Tenantsettingheading = cy.get('.col-3 > thub-page-title > .d-flex > .title > .page-title')
    Tenantsettingheading.should('contain.text', 'Tenant Settings');

    //elements of test case
    const searchUserField = cy.get('.form-control')

    // actions
    searchUserField.type('tashfeen')

    //match expectations
    const expectUsercountLabel = cy.get('.mat-paginator-range-label')
    expectUsercountLabel.should('contain.text', '1 - 8 of 8')

  })

})


