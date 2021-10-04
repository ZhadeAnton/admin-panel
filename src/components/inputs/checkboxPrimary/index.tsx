import React from 'react'

import './styles.scss'
import { ICheckbox } from '../../../interfaces/inputInterfaces'

interface Props {
  value: ICheckbox['value'],
  checked: ICheckbox['checked'],
  onRemoveItem: (checkbox: ICheckbox) => void
}

export default function CheckboxPrimary(props: Props) {
  const handleClick = () => {
    props.onRemoveItem({value: props.value, checked: props.checked})
  }

  return (
    <li onClick={handleClick}>
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
