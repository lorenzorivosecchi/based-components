import React, { useState } from 'react'
import styles from './index.module.css'

export default function BaseSelect(props) {
  const { options = [] } = props

  const [selection, setSelection] = useState()

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.trigger}>
          <span>OPEN</span>
        </div>
        <div role='listbox' className={styles.options}>
          {options.map(({ label, value }) => (
            <div
              key={value}
              role='option'
              className={styles.option}
              onClick={() => setSelection(value)}
              aria-selected={selection === value}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
