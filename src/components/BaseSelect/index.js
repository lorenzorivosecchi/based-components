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
  const [activeElementId, setActiveElementId] = useState()

  const handleClick = ({ target }) => {
    const value = target.innerHTML

    if (selection !== value) {
      setSelection(value)
      setActiveElementId(target.id)
    } else {
      setSelection(null)
      setActiveElementId(null)
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
        {props.options.map((value, index) => (
          <div
            role='option'
            key={value}
            index={'option-' + index}
            tabIndex={1 + index}
            aria-selected={selection === value}
            onClick={handleClick}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  )
}
