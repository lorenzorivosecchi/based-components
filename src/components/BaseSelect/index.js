import React, { useCallback, useState } from 'react'
import styles from './index.module.css'

export default function BaseSelect(props) {
  const { options = [] } = props

  const [selection, setSelection] = useState([])

  const handleClick = useCallback(
    (event) => {
      const value = event.target.getAttribute('data-value')
      const ariaSelected = event.target.getAttribute('aria-selected')
      const isSelected = ariaSelected === 'true'

      if (isSelected) {
        setSelection(selection.filter((s) => s !== value))
      } else {
        setSelection([...selection, value])
      }
    },
    [selection, setSelection]
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.trigger}>
          <span>OPEN</span>
        </div>
        <div role='listbox' className={styles.options}>
          {options.map((value) => (
            <div
              key={value}
              role='option'
              className={styles.option}
              onClick={handleClick}
              data-value={value}
              aria-selected={selection.some(s => s === value)}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
