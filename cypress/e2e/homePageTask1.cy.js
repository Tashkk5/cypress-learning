describe('HomePage functionlity of ThingsHub', () => {

  beforeEach('',() => {
    cy.viewport('macbook-16');
    cy.login('dnajafKT', 'Pakistan123');
  })
  
  it('should open Bind Assets Tracker dialog',() => {
    // expected test data

    // elements of test case
    const bindAsstenbtn = cy.get(':nth-child(2) > thub-button > div.ng-star-inserted > .btn')
    bindAsstenbtn.click();
    const AssetDialogHeader = cy.get('.m-0');

    
     // action
     
     AssetDialogHeader.should('contain','Asset Tracker');

     const CloseAssetDialogbtn = cy.get('.mr-2 > div.ng-star-inserted > .btn');
     CloseAssetDialogbtn.click();

  })


it ('should load more geofence events',() => {
  // expected test data
  const eventsCountIncrement = 30;

  // elements of test case

  const LoadMorebtn = cy.get('.thub-default-font').eq(0);
  LoadMorebtn.click();

  const items = cy.get('.w-100 > :nth-child(2) > span')
  
  // action
  items.should('contain.text', eventsCountIncrement);

  

})

})
