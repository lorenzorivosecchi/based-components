import React from 'react'
import styles from './index.module.css'

export default function BaseSelect(props) {
  const { options = [] } = props

  return (
    <div className={styles.wrapper}>
      <div role='listbox' className={styles.container}>
        <div className={styles.trigger}>
          <span>OPEN</span>
        </div>
        <div className={styles.options}>
          {options.map(({ label, value }) => (
            <span key={value} role="option" className={styles.option}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
