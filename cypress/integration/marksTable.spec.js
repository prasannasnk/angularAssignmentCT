describe('visit app', () => {
    it('opens grade results app', () => {
        console.log(Cypress.config().baseUrl)
      cy.visit('home')
      cy.get("canvas")
      Cypress.on('uncaught:exception', (err, runnable) => { return false; })

    })
  })

  it('should add student name', () => {
    cy.get('input').should('have.value', 'Joseph')
})
it('should check canvas click', () => {
    cy.get("canvas").click()
})