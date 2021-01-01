import React from 'react'
import styles from "./index.module.css"

export default function BaseSelect(props) {
  const { options = [] } = props

  return (
    <select className={styles.wrapper} role='listbox'>
      {options.map((key) => (
        <option key={key}>{key}</option>
      ))}
    </select>
  )
}
