describe('電影予告集会', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('エラーページが表示されていない', () => {
    cy.get('#error-page').should('not.exist');
  })
})
