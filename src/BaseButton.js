import React from 'react'
import styles from './BaseButton.module.css'

export default function BaseButton(props) {
  return (
    <button {...props} className={[styles.button, props.className].join(' ')}>
      {props.children}
    </button>
  )
}
