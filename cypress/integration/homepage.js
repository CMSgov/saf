describe('The Home Page', () => {
    it('loads all sections', () => {
      // go to homepage
      cy.visit('/')
      // check the top text
      cy.contains('The CMS Security Automation Framework (SAF) brings together applications, techniques, libraries')
      // check How CMS SAF Works
      cy.contains('(Code Analysis, Continuous Monitoring, Security Operations)')
      // check a chevron
      cy.get('[id=operations_chevron]')
      cy.contains('')
      cy.contains('')
      cy.contains('')
      cy.contains('')

    })
  })