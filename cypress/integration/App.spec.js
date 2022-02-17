
describe("Home page rendering",()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    
    it("should find  main page",()=>{
        cy.url().should('include', '/')
        cy.get('#main').should('exist')
        cy.get('button').eq(0).should('exist').contains('Buy Token')
        cy.get('button').eq(1).should('exist').contains('Check Days Remaining')
    })


  
     it(" buy token form process success",()=>{
        cy.get('#main').should('exist')
        cy.get('button').eq(0).contains('Buy Token').click()
      
        cy.get('h1').contains('Buy Token')
        cy.wait(500)
        cy.get("[type='text']").type('LOT12E');
        cy.wait(500)
        cy.get('[type=number]').type(2500).invoke('val').then(val => +val).should('be.lt', 185000).then(val => +val).should('be.gt', 100)
      
        cy.wait(500)
       
        cy.get('button[type="submit"]').eq(0).contains("Send").click({force:true});
        cy.wait(500)
    })

    it(" buy token form process failing",()=>{
        cy.get('#main').should('exist')
        cy.get('button').eq(0).contains('Buy Token').click()
     
        cy.get('h1').contains('Buy Token')
        
       
        cy.get("[type='text']").type('LOT12');
        cy.get('p').eq(0).invoke('removeClass','hidden')
        cy.get('[type=number]').type(80)
        cy.wait(500)
        cy.get('p').eq(1).invoke('removeClass','hidden')
        cy.wait(500)
        cy.get('button[type="submit"]').eq(0).contains("Send").invoke('removeClass','disable');

    })

    it(" check days left process success",()=>{
        cy.get('#main').should('exist')
        cy.get('button').eq(1).contains('Check Days Remaining').click()
        cy.get('h1').contains('Check Days Left')
        
        cy.wait(500)
        cy.get("[type='text']").type('LOT12ERT',{force: true});
        cy.wait(500)
        cy.get('[type=number]').type(25405780).should('be.visible')
      
        cy.wait(500)
        cy.get('span').eq(0).invoke('removeClass','hidden')
         cy.get('button[type="submit"]').contains("Check").click({force:true});

        cy.wait(500)
    })
    it(" check days left process failing",()=>{
        cy.get('#main').should('exist')
        cy.get('button').eq(1).contains('Check Days Remaining').click()
        cy.get('h1').contains('Check Days Left')
        
       
        cy.get("[type='text']").type('LOT82ERT');
        cy.get('p').eq(0).invoke('removeClass','hidden')
        cy.get('[type=number]').type(25405780)
        cy.wait(500)
        cy.get('p').eq(1).invoke('removeClass','hidden')
        cy.wait(500)
        cy.get('span').eq(1).invoke('removeClass','hidden')
         cy.get('button[type="submit"]').contains("Check").click({force:true});

        cy.wait(500)
    })

    })