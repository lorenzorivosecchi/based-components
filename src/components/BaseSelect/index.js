import React from 'react'

export default function BaseSelect(props) {
  const { options = [] } = props

  return (
    <select role='listbox'>
      {options.map((value) => (
        <option key={value}>{value}</option>
      ))}
    </select>
  )
}
