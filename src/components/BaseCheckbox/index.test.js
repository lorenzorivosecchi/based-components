import React from 'react'
import BaseCheckbox from '.'
import styles from './index.module.css'
import { render } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

describe('BaseCheckbox', () => {
  it('is truthy', () => {
    expect(BaseCheckbox).toBeTruthy()
  })
  it('renders a checkbox', () => {
    const { queryByRole } = render(<BaseCheckbox />)
    expect(queryByRole('checkbox')).not.toBeNull()
  })
  it('has default styles', () => {
    const { container } = render(<BaseCheckbox />)
    expect(container.firstChild).toHaveClass(styles.container)
  })
})
