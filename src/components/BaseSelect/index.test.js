import React from 'react'
import BaseSelect from '.'
import styles from './index.module.css'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

describe('BaseSelect', () => {
  it('is truthy', () => {
    expect(BaseSelect).toBeTruthy()
  })
  it('renders a listbox', () => {
    const { getByRole } = render(<BaseSelect />)
    expect(getByRole('listbox')).toBeTruthy()
  })
  it('has default className', () => {
    const { container } = render(<BaseSelect />)
    expect(container.firstChild).toHaveClass(styles.wrapper)
  })
  it('renders the options', () => {
    const options = ['dog']
    const { queryAllByRole } = render(<BaseSelect options={options} />)
    expect(queryAllByRole('option')).toHaveLength(options.length)
  })
  it('renders a label', () => {
    const options = ['dog'];
    const { queryByRole } = render(<BaseSelect options={options} />)
    expect( queryByRole("label") ).not.toBeNull();
  })
  it('allows options to be selected and unselected', () => {
    const options = ['dog']
    const { getByRole } = render(<BaseSelect options={options} />)

    const firstOption = getByRole('option')
    const listBox = getByRole('listbox')

    userEvent.click(firstOption)
    expect(listBox).toHaveAttribute('aria-activedescendant', firstOption.id)
    expect(firstOption).toHaveAttribute('aria-selected', 'true')

    userEvent.click(firstOption)
    expect(firstOption).toHaveAttribute('aria-selected', 'false')
    expect(listBox).toHaveAttribute('aria-activedescendant', firstOption.id)
  })
  it('executes a callback when selection changes', () => {
    const options = ['dog']
    const handleChange = jest.fn()
    const { getByRole } = render(
      <BaseSelect options={options} onChange={handleChange} />
    )
    const firstOption = getByRole('option')

    userEvent.click(firstOption)
    expect(handleChange).toHaveBeenCalledWith([ firstOption.innerHTML ])
  })
  it('opens the options when trigger is clicked', () => {

  })
})
 