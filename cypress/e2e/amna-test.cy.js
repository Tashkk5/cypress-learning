/// <reference types="Cypress" />

/*  ----------------
- No sections in first case, as per golden rules
*/


describe('Bind Asset Tracker Functionality', () => {

    beforeEach('', () => {
        cy.viewport('macbook-16');
        cy.visit('https://dev.thingshub.smartmakers.de/ui/');
        loginIntoThingsHub();
    });

    it(`should open bind dialog on clicking "Bind Asset Tracker" button`, () => {
        // test elements
        const bindAssetTrackerButtonElement = cy.get(':nth-child(2) > thub-button > div.ng-star-inserted > .btn');

        // actions
        bindAssetTrackerButtonElement.click();

        // matching expectations
        const dialogueBox = cy.get('.modal-body');
        dialogueBox.should('exist');

        const dialogueBoxTitle = cy.get('.m-0');
        dialogueBoxTitle.should('contain.text', 'Bind Asset with Asset Tracker or Asset Tag');
    });

    it(`should increase the table counter after load more`, () => {
        // test data
        const expectedInitialTableCount = 15;
        const expectedTableCountAfterLoadMore = 30;

        // test elements
        const loadMoreButtonElement = cy.get('.w-100 > .d-flex');


        // matching expectations
        loadMoreButtonElement.should('exist');

        const tableItemsCounterElement = cy.get('.w-100 > :nth-child(2) > span');
        tableItemsCounterElement.should('contain.text', expectedInitialTableCount);

        loadMoreButtonElement.click();

        const newItemsCount = cy.get('.w-100 > :nth-child(2) > span');
        newItemsCount.should('contain.text', expectedTableCountAfterLoadMore);
    });

    
});


function loginIntoThingsHub() {
    // test data
    const validUsername = 'tashfeen';
    const validPassword = 'leobardeen';
    const expectedMatchingUrl = '/home';

    // elements of test case
    const usernameElement = cy.get('#username');
    const passwordElement = cy.get('#password');
    const loginButton = cy.get(`button[class='btn btn-block btn-primary']`);


    // actions
    usernameElement.type(validUsername);
    passwordElement.type(validPassword);
    loginButton.click();
}

