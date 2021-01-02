import React, { useCallback, useEffect, useState } from 'react'
import styles from './index.module.css'

export default function BaseSelect(props) {
  const { options = [], onChange } = props

  const [selection, setSelection] = useState([])
  const [activeDescendant, setActiveDescendant] = useState()

  const handleClick = useCallback(
    (event) => {
      const value = event.target.innerHTML
      const ariaSelected = event.target.getAttribute('aria-selected')

      setActiveDescendant(event.target.id)

      if (ariaSelected === 'true') {
        setSelection(selection.filter((s) => s !== value))
      } else {
        setSelection([...selection, value])
      }
    },
    [selection, setSelection]
  )

  useEffect(() => {
    if (onChange) {
      onChange(selection)
    }
  }, [selection])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.trigger}>
          <span>OPEN</span>
        </div>
        <div
          role='listbox'
          className={styles.options}
          aria-activedescendant={activeDescendant}
        >
          {options.map((value, index) => (
            <div
              key={value}
              role='option'
              id={`lc-listbox1-${index}`}
              className={styles.option}
              aria-selected={selection.some((s) => s === value)}
              onClick={handleClick}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
