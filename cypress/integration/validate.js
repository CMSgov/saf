describe('The Validate Page', () => {
    it('loads content', () => {
      // go to page
      cy.visit('/validate')
      // check for text
      cy.contains('All assessment tests under SAF are associated with CMS ARS 3.1 (NIST SP 800-53) Security Controls.')
      // check a few links loaded
      cy.get('a').get('[id*=chip-]').each(link => {
        cy.request(link.prop('href')).then((resp) => {
            expect(resp.status).to.eq(200)
        })
        })
    })
  })