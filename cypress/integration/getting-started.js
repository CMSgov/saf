import { isIterable } from "core-js"

describe('The Getting Started Page', () => {
    it('loads content', () => {
      // go to page
      cy.visit('/getstarted')
      // check for text
      cy.contains('DevSecOps is a software development framework')
      // check the image
      cy.get('[id=inspec-runner]')
    }),
    it('has working links', () => {
      cy.get('a').get('[id*=gs-]').each(link => {
        if (link.hasClass('download')) {
          cy.request(link[0].href)
          .its('status')
          .should('eq', 200)
        } else {
          cy.get(link).should('have.attr', 'target', '_blank')
        }
      })
    })
  })