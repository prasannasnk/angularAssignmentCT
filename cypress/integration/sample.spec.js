// sample.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })
  describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        console.log(Cypress.config().baseUrl)
      cy.visit('home')
      Cypress.on('uncaught:exception', (err, runnable) => { return false; })
    })
  })
