import React from 'react'
import styles from './index.module.css'
import { classNames } from '../../lib/classNames'

export default function BaseTextField(props) {
  const { className } = props
  return (
    <input type='text' className={classNames(styles.container, className)} />
  )
}
