import React from 'react'
import BaseForm from '.'
import { render } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

describe('BaseTextField', () => {
  it('is truthy', () => {
    expect(BaseForm).toBeTruthy();
  })
  it('renders a form', () => {
    const { queryByRole } = render(<BaseForm />)
    expect(queryByRole("form")).not.toBeNull();
  })
  it('renders a submit button', () => {
    const { queryByRole } = render(<BaseForm />);
    expect(queryByRole("button")).toHaveAttribute("type", "submit");
  })
})
