import React, { useCallback, useEffect, useState } from 'react'
import styles from './index.module.css'
import { classNames } from '../../lib/classNames'

/**
 *
 * @param {*} props
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role
 */
export default function BaseSelect(props) {
  const [open, setOpen] = useState()
  const [selection, setSelection] = useState()

  const handleOptionClick = (value) => {
    if (selection !== value) {
      setSelection(value)
    } else {
      setSelection(null)
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
      >
        {props.options.map((value, index) => (
          <div
            role='option'
            key={value}
            tabIndex={1 + index}
            aria-selected={selection === value}
            onClick={() => handleOptionClick(value)}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  )
}
