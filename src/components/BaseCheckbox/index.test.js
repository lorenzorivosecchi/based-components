import React from 'react'
import BaseCheckbox from '.'
import { render } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

describe('BaseCheckbox', () => {
  it('is truthy', () => {
    expect(BaseCheckbox).toBeTruthy()
  })
  it('renders a checkbox', () => {
      const { queryByRole  } = render(<BaseCheckbox />)
      expect(queryByRole("checkbox")).not.toBeNull();
  })
});