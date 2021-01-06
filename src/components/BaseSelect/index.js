import React, { useCallback, useEffect, useState } from 'react'
import styles from './index.module.css'
import { classNames } from '../../lib/classNames'

/**
 *
 * @param {*} props
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role
 */
export default function BaseSelect(props) {
  const { options = [], multiple } = props

  const [open, setOpen] = useState()
  const [selection, setSelection] = useState([])
  const [activeElementId, setActiveElementId] = useState()


  const handleClick = ({ target }) => {
    const value = target.innerHTML
    const isSelected = selection.includes(value);

    // If it's a multi select listbox
    if (multiple) {
      setActiveElementId(target.id)
      // If selection includes value
      if (isSelected) {
        setSelection(selection.filter((v) => v === value))
      } else {
        setSelection([...selection, value])
      }
      return
    }

    // If it's a single select listbox
    if (isSelected) {
      setSelection([])
      setActiveElementId(null)
    } else {
      setSelection([ value ])
      setActiveElementId(target.id)
    }
  }

  return (
    <div>
      <div role='label'>Select</div>
      <div
        role='listbox'
        className={open ? styles.open : ''}
        tabIndex={0}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        aria-activedescendant={activeElementId}
      >
        {options.map((value, index) => (
          <div
            role='option'
            key={value}
            index={'option-' + index}
            tabIndex={1 + index}
            aria-selected={selection.includes(value)}
            onClick={handleClick}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  )
}
