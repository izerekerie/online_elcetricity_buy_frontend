
describe("Home page rendering",()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    
    it("should find  main page",()=>{
        cy.url().should('include', '/register')
        cy.get('#main').should('exist')
    })

    it("should  find input type of text",()=>{
        cy.get('#main').should('exist')
        cy.get('[type="text"]').check()
    })
    it("should  find input type of text",()=>{
        cy.get('#main').should('exist')
        cy.get('[type="text"]').check()
    })
     it("should find right placeholders",()=>{
        cy.get('input[placeholder*="Name"]')

    })

    it('should contain 2 modals ', () => {
        cy.get('Modal').its('length').should('eq', 2);
        cy.get('Modal').eq(0).contains('walk');
      });
   

    })