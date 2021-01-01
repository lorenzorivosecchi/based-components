import React from 'react'
import { BaseButton, BaseCheckbox, BaseTextField, BaseSelect } from 'lorenzo-components'
import 'lorenzo-components/dist/index.css'

const App = () => {
  return (
    <>
      <BaseButton tooltip='Hello'>Click me.</BaseButton>
      <BaseCheckbox />
      <BaseTextField />
      <BaseSelect />
    </>
  )
}

export default App
