describe('Testing ThingsHub Home page', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('https://dev.thingshub.smartmakers.de/ui/');
        loginThingsHub();
    });

    it('should open bind modal when Bind Asset Tracker button is clicked', () => {
        // elements of the test case
        const bindAssetTrackerButton = cy.get(':nth-child(2) > thub-button > div.ng-star-inserted > .btn');
        // action
        bindAssetTrackerButton.click();

        // matching expectation
        const assetBindModalStepperElement = cy.get('.mat-horizontal-stepper-header-container');
        assetBindModalStepperElement.should('be.visible');
    });

    it('should close Asset Bind modal cancel button is clicked', () => {
        // elements of the test case
        const bindAssetTrackerButton = cy.get(':nth-child(2) > thub-button > div.ng-star-inserted > .btn');
        // action
        bindAssetTrackerButton.click();

        // matching expectation
        const cancelButtonElement = cy.get('.mr-2 > div.ng-star-inserted > .btn');
        cancelButtonElement.click();

        cy.get('.mat-horizontal-stepper-header-container').should('not.exist')
    });

    it(`should increase the count of "Latest Geofence Events" on clicking the "load more" button using table counter`, () => {
        // test data
        const expectedInitialTableCount = 15;
        const expectedTableCountAfterLoadMore = 30;

        // elements
        const loadMoreButtonElement = cy.get('.d-flex > .k-button');
        const tableCountSpanElementSelector = '.w-100 > :nth-child(2) > span';

        // matching expectations
        cy.get(tableCountSpanElementSelector).should('contain.text', expectedInitialTableCount);
        loadMoreButtonElement.click();
        cy.get(tableCountSpanElementSelector).should('contain.text', expectedTableCountAfterLoadMore);
    });

    it(`should increase the count of "Latest Geofence Events" on clicking the "load more" button using table row length`, () => {
        // test data
        const expectedInitialTableCount = 15;
        const expectedTableCountAfterLoadMore = 30;

        // elements
        const loadMoreButtonElement = cy.get('.d-flex > .k-button');
        const tableElementSelector = `table[class='k-grid-table']`

        // matching expectations
        cy.wait(2000);
        cy.get(tableElementSelector).then((element) => {
            const countOfRowsInTable = element[0].rows.length;
            expect(countOfRowsInTable).equals(expectedInitialTableCount);
        })

        loadMoreButtonElement.click();

        cy.wait(2000);
        cy.get(tableElementSelector).then((element) => {
            const countOfRowsInTable = element[0].rows.length;
            expect(countOfRowsInTable).equals(expectedTableCountAfterLoadMore);
        });
    });


});


function loginThingsHub() {
    const validUsername = 'tashfeen';
    const validPassword = 'leobardeen';

    // elements of test case
    const usernameElement = cy.get('#username');
    const passwordElement = cy.get('#password');
    const loginButton = cy.get(`button[class='btn btn-block btn-primary']`);

    // actions
    usernameElement.type(validUsername);
    passwordElement.type(validPassword);
    loginButton.click();
}