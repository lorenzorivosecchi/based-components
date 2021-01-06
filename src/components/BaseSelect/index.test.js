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

  it('is be truthy', () => {
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
    const label = screen.queryByRole('label')
    expect(label).toHaveTextContent(/.+/)
  })
  it('cycles elements in tab order', () => {
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

    it('display the options', () => {
      expect(screen.getByRole('listbox')).toHaveClass(styles.open)
    })
  })

  describe('when listbox becomes inactive', () => {
    beforeEach(() => {
      userEvent.tab()
      userEvent.click(document.body)
    })
    it('hides the options', () => {
      expect(screen.getByRole('listbox')).not.toHaveClass(styles.open)
    })
  })
  describe('when an unselected option is clicked', () => {
    beforeEach(() => {
      const options = screen.queryAllByRole('option')
      userEvent.click(options[0])
    })
    it('switches to selected', () => {
      const options = screen.queryAllByRole('option')
      expect(options[0]).toHaveAttribute('aria-selected', 'true')
    })
    it('is added as listbox active descendant', () => {
      const options = screen.queryAllByRole('option')
      const listbox = screen.getByRole('listbox')
      expect(listbox).toHaveAttribute('aria-activedescendant', options[0].id)
    })
  })

  describe('when a selected option is clicked', () => {
    beforeEach(() => {
      const options = screen.queryAllByRole('option')
      userEvent.click(options[0])
      userEvent.click(options[0])
    })
    it('switches to unselected', () => {
      const options = screen.queryAllByRole('option')
      expect(options[0]).toHaveAttribute('aria-selected', 'false')
    })
    it('is removed from listbox active descendant', () => {
      const listbox = screen.getByRole('listbox')
      expect(listbox).not.toHaveAttribute('aria-activedescendant')
    })
  })

  describe('when another option is selected', () => {
    beforeEach(() => {
      const options = screen.queryAllByRole('option')
      userEvent.click(options[0])
      userEvent.click(options[1])
    })
    it('overrides the previously selected option', () => {
      const options = screen.queryAllByRole('option')
      expect(options[0]).toHaveAttribute('aria-selected', 'false')
      expect(options[1]).toHaveAttribute('aria-selected', 'true')
    })
    it('replaces the previous listbox active descendant', () => {
      const listbox = screen.getByRole('listbox')
      expect(listbox).toHaveAttribute('aria-activedescendant', options[1].id)
    })
  })
})

describe('BaseSelect (multiple)', () => {
  beforeEach(() => {
    render(<BaseSelect options={options} multiple />)
  })
  describe('when another option is selected', () => {
    beforeEach(() => {
      const options = screen.queryAllByRole('option')
      userEvent.click(options[0])
      userEvent.click(options[1])
    })
    it("doesn't override the previously selected option", () => {
      const options = screen.queryAllByRole('option')
      expect(options[0]).toHaveAttribute('aria-selected', 'true')
      expect(options[1]).toHaveAttribute('aria-selected', 'true')
    })
  })
})
