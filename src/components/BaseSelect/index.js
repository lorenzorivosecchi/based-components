import React, { useCallback, useEffect, useState } from 'react'
import styles from './index.module.css'
import { classNames } from '../../lib/classNames'

/**
 *
 * @param {*} props
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role
 */
export default function BaseSelect(props) {
  const { options = [], onChange, multiple } = props

  const [selection, setSelection] = useState([])
  const [activeDescendant, setActiveDescendant] = useState()
  const [open, setOpen] = useState(false)

  const handleOptionClick = useCallback(
    (event) => {
      const value = event.target.innerHTML
      const ariaSelected = event.target.getAttribute('aria-selected')

      setActiveDescendant(event.target.id)

      if (multiple) {
        if (ariaSelected === 'true') {
          setSelection(selection.filter((s) => s !== value))
        } else {
          setSelection([...selection, value])
        }
      } else {
        setSelection([value])
      }
    },
    [selection, setSelection]
  )

  const handleLabelClick = useCallback(() => {
    setOpen(!open)
  }, [open, setOpen])

  const handleListboxFocus = useCallback((event) => {
    const { target } = event
    const options = target.children

    if (options.length > 0) {
      options[0].focus()
    }
  }, [])

  useEffect(() => {
    if (onChange) {
      onChange(selection)
    }
  }, [selection])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          role='label'
          id={styles.label}
          className={styles.label}
          onClick={handleLabelClick}
        >
          Select
        </div>
        <div
          role='listbox'
          tabIndex={0}
          className={classNames(styles.options, open && styles.open)}
          aria-activedescendant={activeDescendant}
          aria-labelledby={styles.label}
          aria-multiselectable={multiple}
          onFocus={handleListboxFocus}
        >
          {options.map((value, index) => {
            const isSelected = selection.some((s) => s === value)

            return (
              <div
                key={value}
                role='option'
                id={`${styles.option}-${index}`}
                tabIndex={1 + index}
                className={classNames(
                  styles.option,
                  isSelected && styles.selected
                )}
                aria-selected={isSelected}
                onClick={handleOptionClick}
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
