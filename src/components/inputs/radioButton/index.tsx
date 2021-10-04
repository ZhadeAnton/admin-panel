import React from 'react'

import './styles.scss'
import { IRadioButton } from '../../../interfaces/inputInterfaces'

interface Props {
  button: IRadioButton,
  checked: boolean,
  onChange: (button: IRadioButton) => void
}

export default function RadioButton(props: Props) {
  return (
    <div className='radio-button'>
      <input
        type="radio"
        checked={props.checked}
        className='radio-button'
        onChange={() => props.onChange(props.button)}
      />

      <label onClick={() => props.onChange(props.button)}>
        { props.button.name }
      </label>
    </div>
  )
}
