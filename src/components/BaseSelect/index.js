import React, { useCallback, useEffect, useState } from 'react'
import styles from './index.module.css'
import { classNames } from '../../lib/classNames'

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
          className={classNames(styles.options, styles.open)}
          aria-activedescendant={activeDescendant}
        >
          {options.map((value, index) => {
            const isSelected = selection.some((s) => s === value)

            return (
              <div
                key={value}
                role='option'
                id={`lc-listbox1-${index}`}
                className={classNames(
                  styles.option,
                  isSelected && styles.selected
                )}
                aria-selected={isSelected}
                onClick={handleClick}
              >
                {value}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
