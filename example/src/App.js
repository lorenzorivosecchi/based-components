import React from 'react'
import { BaseButton, BaseCheckbox, BaseTextField, BaseSelect } from 'based-compoents'
import 'based-compoents/dist/index.css'

const App = () => {
  return (
    <>
      <BaseButton tooltip='Hello'>Click me.</BaseButton>
      <BaseCheckbox />
      <BaseTextField />
      <BaseSelect options={["Red", "Green", "Yellow"]} />
    </>
  )
}

export default App
