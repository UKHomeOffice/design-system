describe('The home page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });

  it('is the correct page', () => {
    cy.contains('My page');
  });
});
