describe('HomePage functionlity of ThingsHub', () => {

  beforeEach('',() => {
    cy.viewport('macbook-16');
    cy.login('dnajafKT', 'Pakistan123');
  })
  
  it(`should open "Bind Assets Tracker dialog" on clicking "Bind Tracked Assets" button`,() => {
    // elements of test case
    const bindAssetButtonElement = cy.get(':nth-child(2) > thub-button > div.ng-star-inserted > .btn');

    // action
    bindAssetButtonElement.click();


    // matching expectation
    const assetDialogHeaderElement = cy.get('.m-0');
    assetDialogHeaderElement.should('contain','Asset Tracker');
  });


it(`should load 15 more geofence events on clicking "Load More" button`,() => {
  // test data
  const eventsCountIncrement = 30;

  // elements of test case
  const loadMoreButtonElement = cy.get('.d-flex > .k-button');

  // action
  loadMoreButtonElement.click();

  // matching expectations
  const geofenceTableItemsCounterElement = cy.get('.w-100 > :nth-child(2) > span');
  geofenceTableItemsCounterElement.should('contain.text', eventsCountIncrement);
});

})



/**
 - Naming should be more explicit & in camelCase.
 - Follow the sections in Golden rules more carefully.
 - The second test case should test the initial value is 15 and after click its 30.
 */