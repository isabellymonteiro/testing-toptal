describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    cy.url().should('include', '/commands/actions')

    cy.get('.action-email').type('fake@email.com')

    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})

// Visit: https://example.cypress.io
// Find the element with content: type
// Click on it
// Get the URL
// Assert it includes: /commands/actions
// Get the input with the action-email class (prefer to use data-testid: https://docs.cypress.io/guides/references/best-practices#Selecting-Elements)
// Type fake@email.com into the input
// Assert the input reflects the new value