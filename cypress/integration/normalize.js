describe('The Normalize Page', () => {
    it('loads content', () => {
      // go to page
      cy.visit('/normalize')
      // check for text
      cy.contains('Heimdall Data Format')
      cy.contains('additionalProperties:true')
      cy.contains("control 'V-75443' do")
  })
})