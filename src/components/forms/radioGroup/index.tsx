import React from 'react'

import './styles.scss'
import { IRadioButton } from '../../../interfaces/inputInterfaces'
import RadioButton from '../../inputs/radioButton'

interface Props {
  selected: string | undefined,
  buttons: Array<IRadioButton>,
  onChange: (button: IRadioButton) => void
}

export default function RadioGroup(props: Props) {
  return (
    <ul className='radio-buttons-group'>
      {
        props.buttons?.map((button, i) => (
          <RadioButton
            key={i}
            button={button}
            checked={props.selected === button.name}
            onChange={props.onChange}
          />
        ))
      }
    </ul>
  )
}
