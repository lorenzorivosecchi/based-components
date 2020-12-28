import React from 'react'
import styles from './BaseButton.module.css'
import { classNames } from './lib/classNames'

export default function BaseButton(props) {
  const { className, onClick, tooltip, tooltipClassName, children } = props

  return (
    <button
      className={classNames(styles.button, className)}
      onClick={onClick}
    >
      {children}
      {tooltip && (
        <div className={classNames(styles.tooltip, tooltipClassName)}>
          {tooltip}
        </div>
      )}
    </button>
  )
}
