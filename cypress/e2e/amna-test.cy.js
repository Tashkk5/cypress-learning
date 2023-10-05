/// <reference types="Cypress" />

describe('Bind Asset Tracker Functionality', () => {
    
    beforeEach('', () => {
        cy.viewport('macbook-16');
        cy.visit('https://dev.thingshub.smartmakers.de/ui/');

      });

      it('should navigate to home page after login with correct credentials', () => {
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

        const bindAssetTrackerButton = cy.get(':nth-child(2) > thub-button > div.ng-star-inserted > .btn');
        bindAssetTrackerButton.click();

        const dialogueBox = cy.get('.modal-body');
        dialogueBox.should('exist');

        const dialogueBoxTitle = cy.get('.m-0');
        dialogueBoxTitle.should('contain.text', 'Bind Asset with Asset Tracker or Asset Tag' );

        const dialogueBoxCancelButton = cy.get('.mr-2 > div.ng-star-inserted > .btn');
        dialogueBoxCancelButton.click();
        dialogueBox.should('not.exist');

        });

    it('should load 15 more assets in the table when "Load More" button is clicked',() => {
        
        // test data
        const validUsername = 'tashfeen';
        const validPassword = 'leobardeen';
        const expectedMatchingUrl = '/home';
    
         // Test Data
         const initialCount = 15;
         const increamentedCount = 30;

        // elements of test case
        const usernameElement = cy.get('#username');
        const passwordElement = cy.get('#password');
        const loginButton = cy.get(`button[class='btn btn-block btn-primary']`);
        
    
        // actions
        usernameElement.type(validUsername);
        passwordElement.type(validPassword);
        loginButton.click();


        // Test Elements
        const loadMoreButton = cy.get('.w-100 > .d-flex');
        loadMoreButton.should('exist');

        const itemsCount = cy.get('.w-100 > :nth-child(2) > span');
        itemsCount.should('contain.text','15');
        
        loadMoreButton.click();
        
        const newItemsCount= cy.get('.w-100 > :nth-child(2) > span');
        newItemsCount.should('contain.text','30');

        // Match Expectations
        // for (let i = 0; i < 5; i++) {

        //     newValue = itemsCountValue + increamentedValue;
        //     itemsCount.should('equal', newValue);
        //     itemsCountValue = newValue;
        //     loadMoreButton.click();

        // }
    });
});

