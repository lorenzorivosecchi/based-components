import React from 'react'
import styles from './index.module.css'
import { classNames } from "../../lib/classNames";

export default function BaseCheckbox(props) {
  const { className } = props;

  return (
    <label className={classNames(styles.container, className)}>
      <input type='checkbox' />
      <span className={styles.checkmark}></span>
    </label>
  )
}
