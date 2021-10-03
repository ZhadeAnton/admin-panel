import React from 'react'

import './styles.scss'
import { ICheckbox } from '../../../interfaces/inputInterfaces'
import CheckboxPrimary from '../../inputs/checkboxPrimary'

interface Props {
  checkboxes: Array<ICheckbox>
}

export default function CheckboxGroup(props: Props) {
  return (
    <ul className='checkbox-group'>
      {
        props.checkboxes.map((checkbox, i) => (
          <CheckboxPrimary
            key={i}
            {...checkbox}
          />
        ))
      }
    </ul>
  )
}
