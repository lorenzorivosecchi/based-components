import React from 'react'
import styles from './BaseButton.module.css'
import { classNames } from "./lib/classNames";

export default function BaseButton(props) {
  return (
    <button
      className={classNames(styles.button, props.className)}
      onClick={props.onClick}
    >
      {props.children}
      {props.tooltip && (
        <div className={classNames(styles.tooltip, props.tooltipClassName)}>
          {props.tooltip}
        </div>
      )}
    </button>
  )
}
