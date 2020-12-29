import React from 'react'
import BaseTextField from '.'
import styles from './index.module.css'
import { render } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
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
})
