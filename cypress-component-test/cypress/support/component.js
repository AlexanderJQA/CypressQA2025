// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import { mount } from '@cypress/react'
import counter from '../../src/Counter'  

// Example to mount a component and interact with it
// https://on.cypress.io/mount

Cypress.Commands.add('mount', (component) => {
  mount(component)
})  


// Example use:
// cy.mount(<MyComponent />)