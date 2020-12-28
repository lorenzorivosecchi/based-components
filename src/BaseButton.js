import React from 'react'
import styles from './BaseButton.module.css'

export default function BaseButton(props) {
  return (
    <button className={[styles.button, props.className].join(' ')}>
      {props.children}
      {props.tooltip && (
        <div className={[styles.tooltip, props.tooltipClassName].join(' ')}>
          {props.tooltip}
        </div>
      )}
    </button>
  )
}
