import React from 'react'
import styles from './BaseButton.module.css'

export default function BaseButton(props) {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  )
}
