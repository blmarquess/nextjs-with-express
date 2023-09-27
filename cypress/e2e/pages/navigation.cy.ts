describe('Navigation system base', () => {
  it('should navigate to home and redirect to chat page by default', () => {
    cy.visit('/')
    cy.contains('Get started by editing src/app/page.tsx')
  })
})
