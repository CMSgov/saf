describe('The Validate Page', () => {
    it('loads content', () => {
      // go to page
      cy.visit('/validate')
      // check for text
      cy.contains('All assessment tests under SAF are associated with CMS ARS (NIST SP 800-53) Security Controls.')
      // check a few links loaded
      cy.contains('AWS RDS Infrastructure CIS')
      cy.contains('Kubernetes CIS')
      cy.contains('Red Hat 7 STIG')
      cy.contains('MongoDB STIG')
      cy.contains('RSA Archer 6 SCG')
      cy.contains('NGINX')
  })
})
