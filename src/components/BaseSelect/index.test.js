import React from 'react'
import BaseSelect from '.'
import styles from './index.module.css'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

describe('BaseSelect', () => {
  const options = ['dog', 'cat', 'mouse']

  beforeEach(() => {
    render(<BaseSelect options={options} />)
  })

  it('is truthy', () => {
    expect(BaseSelect).toBeTruthy()
  })
  it('renders a listbox', () => {
    expect(screen.getByRole('listbox')).toBeTruthy()
  })
  it('renders the options', () => {
    screen.queryAllByRole('option').forEach((option, index) => {
      expect(option).toHaveTextContent(options[index])
    })
  })
  it('renders a label', () => {
    const label = screen.queryByRole('label');
    expect(label).toHaveTextContent(/.+/);
  })
  it('should cycle elements in tab order', () => {
    userEvent.tab()
    expect(screen.getByRole('listbox')).toHaveFocus()

    screen.getAllByRole('option').forEach((option) => {
      userEvent.tab()
      expect(option).toHaveFocus()
    })
  })
})
