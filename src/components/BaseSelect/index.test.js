import React from 'react'
import BaseSelect from '.'
import styles from "./index.module.css";
import { render } from '@testing-library/react'
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
  it('renders an array of options', () => {
    const testOptions = ['test1', 'test2']
    const { queryAllByRole } = render(<BaseSelect options={testOptions} />)
    expect(queryAllByRole('option')).toHaveLength(testOptions.length)
  })
  it('has default className', () => {
    const { container } = render(<BaseSelect />)
    expect(container.firstChild).toHaveClass(styles.wrapper)
  })
})
