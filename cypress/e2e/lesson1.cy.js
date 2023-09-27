describe('Login functionality of ThingsHub', () => {

  beforeEach('', () => {
    cy.viewport('macbook-16');
  });
  
  it('should open the thinghub login page', () => {
    cy.visit('https://dev.thingshub.smartmakers.de/ui/en/login');
    const myName = 'Tashfeeen';

    
    
    myName.slice(1,5)
  })

})