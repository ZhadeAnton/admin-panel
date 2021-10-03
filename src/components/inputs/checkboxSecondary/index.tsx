
import React from 'react'

import './styles.scss'

interface Props {
  checked: boolean,
  label: string
}

export default function CheckboxSecondary(props: Props) {
  return (
    <div className='checkbox-secondary-wrapper'>
      <input
        readOnly
        type="checkbox"
        checked={props.checked}
        className="checkbox-secondary"
      />

      <label
        className="checkbox-secondary__label"
      >
        { props.label }
      </label>
    </div>
  )
}
