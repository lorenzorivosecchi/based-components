import React from 'react'
import {
  BaseButton,
  BaseCheckbox,
  BaseTextField,
  BaseSelect
} from 'based-components'
import 'based-components/dist/index.css'

const App = () => {
  return (
    <>
      <h1>Based Components</h1>
      <ul>
        <li>
          <BaseButton tooltip='Hello'>Click me.</BaseButton>
        </li>
        <li>
          <BaseCheckbox />
        </li>
        <li>
          <BaseTextField />
        </li>
        <li>
          <BaseSelect options={['Red', 'Green', 'Yellow']} />
        </li>
      </ul>
    </>
  )
}

export default App
