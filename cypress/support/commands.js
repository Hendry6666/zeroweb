// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const { describe } = require("mocha")

Cypress.Commands.add("Login", (username, password)=>{
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)

    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)
    cy.get('input[name="submit"]').click()

    
})

Cypress.Commands.add("Amo",(amount)=>{
    cy.get('#sp_amount').clear()
    cy.get('#sp_amount').type(amount)
    // cy.get("input[name='amount']").clear()
    // cy.get("input[name='amount']").type('1000')
})

Cypress.Commands.add("Ame",(tty)=>{
    cy.get('#sp_description').clear()
    cy.get('#sp_description').type(tty)
})

Cypress.Commands.add("Time",(time)=>{
    cy.get('#sp_date').type(time)
    cy.contains('15').click()
})