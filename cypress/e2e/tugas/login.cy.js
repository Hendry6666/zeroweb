
import {describe,it} from 'mocha';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Working With Inputs',() => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','login.html')
    });
    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('Should Fill Password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    });

    it('activate check box', () => {
        cy.get('[type="checkbox"]').check()
    });

    it('Should try to login ', () => {
        cy.fixture("user").then(user =>{
            const username = user.username
            const password = user.password
            cy.Login(username,password)
            cy.get('a').contains('Pay Bills').click()
            // cy.get('.alert-error').should('contain.text','Login and/or password are wrong.')
            //atau bisa pakai obsi
            // cy.get('.alert-error').contains('Login and/or password are wrong.')
        })
    });

    it('pay bill', () => {
        cy.get('#sp_payee').select('bofa').invoke('val').should('eq','bofa')
        cy.get('select#sp_account').select('1').invoke('val').should('eq','1')
        
    });
    it('amount', () => {
        cy.fixture("user").then(user =>{
            const amount = 1000
            cy.Amo(amount)
        })
        // cy.get("input[name='amount']").clear()
        // cy.get("input[name='amount']").type('1000')
    });
    it('get time picker', () => {
        cy.fixture("user").then(user =>{
            const time = user.time
            cy.Time(time)
        })
        // cy.get('#sp_date').type("2022-09-01")
        // cy.contains('15').click()
        // cy.get('#ui-datepicker-div')
    });

    it('get descrip', () => {
        cy.fixture("user").then(user =>{
            const tty = user.tty
            cy.Ame(tty)
        })
        // cy.get("input[name='description']").click()
        // cy.get("input[name='description']").type('me')
    });

    it('Klik Pay', () => {
        cy.get('input[type="submit"]').click()
    });

    // it('Get id alert Content', () => {
    //     cy.get('.alert_content').contains('The payment was successfully submitted.')
    // });
})