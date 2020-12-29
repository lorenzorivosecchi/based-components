import React from 'react'
import styles from './index.module.css'
import { classNames } from '../../lib/classNames'

export default function BaseCheckbox(props) {
  const { className, onChange, onFocus, onBlur } = props

  return (
    <label className={classNames(styles.container, className)}>
      <input
        type='checkbox'
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <span className={styles.checkmark}></span>
    </label>
  )
}
