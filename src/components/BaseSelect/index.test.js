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
    const options = ['dog']
    const { queryByRole } = render(<BaseSelect options={options} />)
    expect(queryByRole('label')).not.toBeNull()
  })
  it('allows a single option to be selected at the time', () => {
    const options = ['dog', 'cat']

    const { getByRole, getAllByRole } = render(<BaseSelect options={options} />)

    const listbox = getByRole('listbox')
    const [first, second] = getAllByRole('option')

    userEvent.click(first)
    userEvent.click(second)

    expect(first).toHaveAttribute('aria-selected', 'false')
    expect(second).toHaveAttribute('aria-selected', 'true')
    expect(listbox).toHaveAttribute('aria-activedescendant', second.id)
  })
  it('executes a callback when selection changes', () => {
    const options = ['dog']
    const handleChange = jest.fn()
    const { getByRole } = render(
      <BaseSelect options={options} onChange={handleChange} />
    )
    const firstOption = getByRole('option')

    userEvent.click(firstOption)
    expect(handleChange).toHaveBeenCalledWith([firstOption.innerHTML])
  })
  it('opens the options when label is clicked', () => {
    const options = ['dog']
    const { getByRole } = render(<BaseSelect options={options} />)

    const label = getByRole('label')
    const listbox = getByRole('listbox')

    userEvent.click(label)
    expect(listbox).toHaveClass(styles.open)
  })
  it('closes the options when label is clicked for the second time', () => {
    const options = ['dog']
    const { getByRole } = render(<BaseSelect options={options} />)

    const label = getByRole('label')
    const listbox = getByRole('listbox')

    userEvent.click(label)
    expect(listbox).toHaveClass(styles.open)
    userEvent.click(label)
    expect(listbox).not.toHaveClass(styles.open)
  })
  describe('when multiple prop is set to true', () => {
    it('specifies that is multiselectable', () => {
      const options = ['dog']
      const { getByRole } = render(
        <BaseSelect options={options} multiple={true} />
      )
      expect(getByRole('listbox')).toHaveAttribute(
        'aria-multiselectable',
        'true'
      )
    })
    it('allows multiple options to be selected', () => {
      const options = ['dog', 'cat', 'mouse']

      const { getByRole, getAllByRole } = render(
        <BaseSelect options={options} multiple={true} />
      )

      const listbox = getByRole('listbox')
      const [first, second, third] = getAllByRole('option')

      userEvent.click(first)
      userEvent.click(second)

      expect(first).toHaveAttribute('aria-selected', 'true')
      expect(second).toHaveAttribute('aria-selected', 'true')
      expect(third).toHaveAttribute('aria-selected', 'false')
      expect(listbox).toHaveAttribute('aria-activedescendant', second.id)

      userEvent.click(first)
      userEvent.click(third)

      expect(first).toHaveAttribute('aria-selected', 'false')
      expect(second).toHaveAttribute('aria-selected', 'true')
      expect(third).toHaveAttribute('aria-selected', 'true')
      expect(listbox).toHaveAttribute('aria-activedescendant', third.id)
    })
  })
})
