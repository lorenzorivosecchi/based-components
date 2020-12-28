import React from "react";
import BaseButton from './BaseButton';
import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'

describe('BaseButton', () => {
  it('is truthy', () => {
    expect(BaseButton).toBeTruthy()
  })
  it('renders a button', () => {
    const { getByRole } = render(<BaseButton />)
    expect(getByRole("button")).toBeTruthy();
  })
  it('renders children', () => {
    const testMessage = "Click me";
    const { getByText } = render(<BaseButton>{testMessage}</BaseButton>)
    expect(getByText(testMessage)).toBeTruthy();
  })
  it('has default styles', () => {
    const { getByRole } = render(<BaseButton />);
    expect(getByRole("button")).toHaveAttribute("class", "button")
  })
})
