import React from 'react'
import BaseSelect from '.'
import styles from './index.module.css'
import { screen, render } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

describe('BaseSelect', () => {
  it('is truthy', () => {
    expect(BaseSelect).toBeTruthy()
  })
  it('renders a listbox', () => {
    const { getByRole } = render(<BaseSelect />)
    expect(getByRole('listbox')).toBeTruthy()
  })
  it('has default className', () => {
    const { container } = render(<BaseSelect />)
    expect(container.firstChild).toHaveClass(styles.wrapper)
  })
  describe('when the options prop is present', () => {
    const options = ['dog', 'cat', 'mouse']

    beforeEach(() => {
      render(<BaseSelect options={options} />)
    })

    it('renders the options', () => {
      expect(screen.queryAllByRole('option')).toHaveLength(options.length)
    })
    

  })
})
