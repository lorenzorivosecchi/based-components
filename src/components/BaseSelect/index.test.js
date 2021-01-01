import React from 'react'
import BaseSelect from '.'
// import styles from "./index.module.css";
import { render } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import '@testing-library/jest-dom/extend-expect'

describe('BaseSelect', () => {
  it('is truthy', () => {
    expect(BaseSelect).toBeTruthy()
  })
  it('renders a listbox', () => {
    const { getByRole } = render(<BaseSelect />)
    expect(getByRole('listbox')).toBeTruthy();
  })
})
