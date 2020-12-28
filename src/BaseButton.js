import React from 'react'
import styles from './BaseButton.module.css'
import { classNames } from './lib/classNames'

export default function BaseButton(props) {
  const { className, onClick, children, tooltip, tooltipClassName, leading, trailing } = props

  return (
    <button
      className={classNames(styles.button, className)}
      onClick={onClick}
    >
      {leading}
      {children}
      {trailing}

      {tooltip && (
        <div className={classNames(styles.tooltip, tooltipClassName)}>
          {tooltip}
        </div>
      )}
    </button>
  )
}
