import React from 'react'
import BaseButton from '.'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

describe('BaseButton', () => {
  it('is truthy', () => {
    expect(BaseButton).toBeTruthy()
  })
  it('renders a button', () => {
    const { getByRole } = render(<BaseButton />)
    expect(getByRole('button')).toBeTruthy()
  })
  it('renders children', () => {
    const testMessage = 'Click me'
    const { getByText } = render(<BaseButton>{testMessage}</BaseButton>)
    expect(getByText(testMessage)).toBeTruthy()
  })
  it('has default className', () => {
    const { getByRole } = render(<BaseButton />)
    expect(getByRole('button')).toHaveClass('button')
  })
  it('merges classNames', () => {
    const testClass = 'secondary'
    const { getByRole } = render(<BaseButton className={testClass} />)
    expect(getByRole('button')).toHaveClass('button', testClass)
  })
  it('handles click events', () => {
    const handleClick = jest.fn()
    const { getByRole } = render(<BaseButton onClick={handleClick} />)
    userEvent.click(getByRole('button'))
    expect(handleClick).toBeCalled()
  })
  describe('when tooltip prop is present', () => {
    it('renders a tooltip', () => {
      const testTooltip = 'Test'
      const { getByText } = render(<BaseButton tooltip={testTooltip} />)
      expect(getByText(testTooltip)).toBeTruthy()
    })
    it('provides default className', () => {
      const testTooltip = 'Test'
      const { getByText } = render(<BaseButton tooltip={testTooltip} />)
      expect(getByText(testTooltip)).toHaveClass('tooltip')
    })
  })
  describe('when tooltip prop is missing', () => {
    it("doesn't render a tooltip", () => {
      const { queryByText } = render(<BaseButton />)
      expect(queryByText('div')).toBeNull()
    })
  })
})
