import React from 'react'

import './styles.scss'
import { ICheckbox } from '../../../interfaces/inputInterfaces'

interface Props {
  value: ICheckbox['value'],
  checked: ICheckbox['checked']
}

export default function CheckboxPrimary(props: Props) {
  return (
    <li>
      <input
        readOnly
        type="checkbox"
        checked={props.checked}
        className="checkbox-custom"
      />

      <label className="checkbox-custom-label">
        { props.value }
      </label>
    </li>
  )
}
