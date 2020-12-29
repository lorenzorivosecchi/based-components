import React from 'react'
import BaseTextField from '.'
import styles from './index.module.css'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

describe('BaseTextField', () => {
  it('is truthy', () => {
    expect(BaseTextField).toBeDefined()
  })
  it('renders a textbox', () => {
    const { queryByRole } = render(<BaseTextField />)
    expect(queryByRole('textbox')).not.toBeNull()
  })
  it('has default styles', () => {
    const { container } = render(<BaseTextField />)
    expect(container.firstChild).toHaveClass(styles.container)
  })
  it('merges classNames', () => {
    const testClassName = 'secondary'
    const { container } = render(<BaseTextField className={testClassName} />)
    expect(container.firstChild).toHaveClass(styles.container, testClassName)
  })
  it('passes the onChange and value props', () => {
    const handleChange = jest.fn()
    const { getByRole } = render(<BaseTextField onChange={handleChange} />)
    const textbox = getByRole('textbox')
    userEvent.type(textbox, "hello")
    expect(handleChange).toHaveBeenCalled()
  })
  it('passes the value prop', () => {
    const testValue = "Hello";
    const handleChange = jest.fn();
    const { getByDisplayValue } = render(<BaseTextField value={testValue} onChange={handleChange} />)
    expect(getByDisplayValue(testValue)).toBeDefined();
  })
  it('passes the onBlur prop', () => {
    const handleBlur = jest.fn()
    const { getByRole } = render(<BaseTextField onBlur={handleBlur} />)
    const textbox = getByRole('textbox')
    userEvent.tab(textbox)
    userEvent.tab(textbox)
    expect(handleBlur).toHaveBeenCalled()
  })
  it('passes the onFocus prop', () => {
    const handleFocus = jest.fn()
    const { getByRole } = render(<BaseTextField onFocus={handleFocus} />)
    const textbox = getByRole('textbox')
    userEvent.click(textbox)
    expect(handleFocus).toHaveBeenCalled()
  })
})
