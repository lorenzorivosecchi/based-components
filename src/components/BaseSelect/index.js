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

  return (
    <div
      role='listbox'
      className={open ? styles.open : ""}
      tabIndex={0}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <div role='label'>Select</div>
      {props.options.map((value, index) => (
        <div role='option' key={value} tabIndex={1 + index}>
          {value}
        </div>
      ))}
    </div>
  )
}
