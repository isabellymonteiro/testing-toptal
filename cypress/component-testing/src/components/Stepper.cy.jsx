import React from 'react'
import Stepper from './Stepper'

describe('<Stepper />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Stepper />)
  })

  describe('when it does not receive "inital" prop', () => {
    it('displays the default counter value (0)', () => {
      cy.mount(<Stepper />)
      cy.get('[data-cy=counter]').should('have.text', '0')
    })
  })

  describe('when it receives "inital" prop', () => {
    it('displays the "initial" prop as the counter value', () => {
      cy.mount(<Stepper initial={100} />)
      cy.get('[data-cy=counter]').should('have.text', '100')
    })
  })

  describe('when the increment button is pressed', () => {
    it('increments the counter', () => {
      cy.mount(<Stepper />)
      cy.get('[data-cy=increment]').click()
      cy.get('[data-cy=counter]').should('have.text', '1')
    })

    it('fires a change event with the incremented value', () => {
      const onChangeSpy = cy.spy().as('onChangeSpy')
      cy.mount(<Stepper onChange={onChangeSpy} />)
      cy.get('[data-cy=increment]').click()
      cy.get('@onChangeSpy').should('have.been.calledWith', 1)
    })
  })

  describe('when the decrement button is pressed', () => {
    it('decrements the counter', () => {
      cy.mount(<Stepper />)
      cy.get('[data-cy=decrement]').click()
      cy.get('[data-cy=counter]').should('have.text', '-1')
    })

    it('fires a change event with the decremented value', () => {
      const onChangeSpy = cy.spy().as('onChangeSpy')
      cy.mount(<Stepper onChange={onChangeSpy} />)
      cy.get('[data-cy=decrement]').click()
      cy.get('@onChangeSpy').should('have.been.calledWith', -1)
    })
  })
})