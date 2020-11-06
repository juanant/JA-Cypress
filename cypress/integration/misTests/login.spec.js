describe('Login', () => {
    beforeEach (function () {
        cy.visit('http://zero.webappsecurity.com/login.html')
    })
    
    it('Prueba usuario KO', () => {
        cy.get('#user_login').type(' ')
        cy.get('#user_password').type('password')

        cy.get('.btn').click();

        cy.get('.alert').contains('Login and/or password are wrong.')
    })

    it('Prueba password KO', () => {
        cy.get('#user_login').type('username')
        cy.get('#user_password').type(' ')

        cy.get('.btn').click();
        
        cy.get('.alert').contains('Login and/or password are wrong.')
    })

    it('Probar Forgot Password Ok', () => {

        cy.get('.offset3')
            .find("a[href*='/forgot-password.html']")
            .click();

        cy.contains('Email')

        cy.get('#user_email')
            .type('juanant_ser@hotmail.com')

        cy.get('.btn')
            .click();

        cy.contains('juanant_ser@hotmail.com')
    })
    
    it('Probar credenciales Ok', () => {
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')

        cy.get('.btn').click();

        cy.get('.dropdown-toggle').contains("username");
    })
})

describe('Navegaciones', () => {
    beforeEach (function () {
        cy.visit('http://zero.webappsecurity.com/login.html')
    
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')

        cy.get('.btn').click();

        cy.get('.dropdown-toggle').contains("username");
    })
    
    it('Navegar a Account Activity', () => {
        cy.get('#account_activity_tab').click();

        cy.get('.ui-tabs-selected').contains("Show Transactions");
    })

    it('Navegar a Transfer Funds', () => {
        cy.get('#transfer_funds_tab').click();

        cy.get('.board-header').contains("Transfer Money & Make Payments");
    })

    it('Navegar a Pay Bills', () => {
        cy.get('#pay_bills_tab').click();

        cy.get('.board-header').contains("Make payments to your saved payees");
    })
    
   it('Navegar a My Money Map', () => {
        cy.get('#money_map_tab').click();

        cy.contains("OutFlow Chart");
    })
    
    it('Navegar a Online Statements', () => {
        cy.get('#online_statements_tab').click();

        cy.contains("Statements & Document");
    })    

})