import React from 'react'
import BaseSelect from '.'
import styles from './index.module.css'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

const options = ['dog', 'cat', 'mouse']

describe('BaseSelect', () => {
  beforeEach(() => {
    render(<BaseSelect options={options} />)
  })

  it('should be truthy', () => {
    expect(BaseSelect).toBeTruthy()
  })
  it('should render a listbox', () => {
    expect(screen.getByRole('listbox')).toBeTruthy()
  })
  it('should render the options', () => {
    screen.queryAllByRole('option').forEach((option, index) => {
      expect(option).toHaveTextContent(options[index])
    })
  })
  it('should render a label', () => {
    const label = screen.queryByRole('label')
    expect(label).toHaveTextContent(/.+/)
  })
  it('should cycle elements in tab order', () => {
    userEvent.tab()
    expect(screen.getByRole('listbox')).toHaveFocus()

    screen.getAllByRole('option').forEach((option) => {
      userEvent.tab()
      expect(option).toHaveFocus()
    })
  })

  describe('when listbox becomes active', () => {
    beforeEach(() => {
      userEvent.tab()
    })

    it('should display the options', () => {
      expect(screen.getByRole('listbox')).toHaveClass(styles.open)
    })
  })

  describe('when listbox becomes inactive', () => {
    beforeEach(() => {
      userEvent.tab()
      userEvent.click(document.body)
    })
    it('should hide the options', () => {
      expect(screen.getByRole('listbox')).not.toHaveClass(styles.open)
    })
  })

  describe('when an unselected option is clicked', () => {
    beforeEach(() => {
      const options = screen.queryAllByRole('option')
      userEvent.click(options[0])
    })
    it('should switch to selected', () => {
      const options = screen.queryAllByRole('option')
      expect(options[0]).toHaveAttribute('aria-selected', 'true')
    })
  })

  describe('when a selected option is clicked', () => {
    beforeEach(() => {
      const options = screen.queryAllByRole('option')
      userEvent.click(options[0])
      userEvent.click(options[0])
    })
    it('should switch to unselected', () => {
      const options = screen.queryAllByRole('option')
      expect(options[0]).toHaveAttribute('aria-selected', 'false')
    })
  })
})
