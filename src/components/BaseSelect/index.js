import React from 'react'
import styles from './index.module.css'

export default function BaseSelect(props) {
  const { options = [] } = props

  return (
    <select className={styles.wrapper} role='listbox'>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}
