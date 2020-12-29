import React from 'react'
import styles from './index.module.css'
import { classNames } from '../../lib/classNames'

export default function BaseTextField(props) {
  const { className, onChange, onFocus, onBlur, value } = props
  return (
    <input
      type='text'
      className={classNames(styles.container, className)}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
    />
  )
}
