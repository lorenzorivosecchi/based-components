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


  describe('when listbox becomes active', () => {
    beforeEach(() => {
      userEvent.tab();
    })
    it('should display the options', () => {
      expect(screen.getByRole("listbox")).toHaveClass(styles.open);
    })
  })

  describe('when listbox becomes inactive', () => {
    beforeEach(() => {
      userEvent.tab();
      userEvent.click(document.body);
    })
    it('should hide the options', () => {
      expect(screen.getByRole("listbox")).not.toHaveClass(styles.open);
    })
  })
})
