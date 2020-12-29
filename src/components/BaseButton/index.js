import React from 'react'
import styles from './BaseButton.module.css'
import { classNames } from '../../lib/classNames'

export default function BaseButton(props) {
  const { className, onClick, children, tooltip } = props

  return (
    <button className={classNames(styles.button, className)} onClick={onClick}>
      {children}
      {tooltip && <div className={styles.tooltip}>{tooltip}</div>}
    </button>
  )
}
