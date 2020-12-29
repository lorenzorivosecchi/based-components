import React from 'react'
import BaseCheckbox from '.'
import styles from './index.module.css'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
  it('merges className', () => {
    const testClassName = 'secondary'
    const { container } = render(<BaseCheckbox className={testClassName} />)
    expect(container.firstChild).toHaveClass(styles.container, testClassName)
  })
  it('handles clicks', () => {
    const { getByRole } = render(<BaseCheckbox />)
    const checkbox = getByRole('checkbox')
    userEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })
  it('passes the onChange prop', () => {
    const handleChange = jest.fn()
    const { getByRole } = render(<BaseCheckbox onChange={handleChange} />)
    const checkbox = getByRole('checkbox')
    userEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalled()
  })
  it('passes the onBlur prop', () => {
    const handleBlur = jest.fn()
    const { getByRole } = render(<BaseCheckbox onBlur={handleBlur} />)
    const checkbox = getByRole('checkbox')
    userEvent.tab(checkbox)
    userEvent.tab(checkbox)
    expect(handleBlur).toHaveBeenCalled()
  })
  it('passes the onFocus prop', () => {
    const handleFocus = jest.fn()
    const { getByRole } = render(<BaseCheckbox onFocus={handleFocus} />)
    const checkbox = getByRole('checkbox')
    userEvent.click(checkbox)
    expect(handleFocus).toHaveBeenCalled()
  })
})
