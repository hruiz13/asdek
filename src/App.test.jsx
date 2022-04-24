import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from './testUtils'
import App from './App'

/* function toJson(component) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result
} */

test('Link changes the class when hovered', () => {
  render(
    <App />
  )
  expect(screen.getByText('Vite Docs')).toBeInTheDocument()
})
