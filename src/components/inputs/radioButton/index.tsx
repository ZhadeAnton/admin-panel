import React from 'react'

import './styles.scss'

export default function RadioButton() {
  return (
    <div className='radio-button'>
      <input
        type="radio"
        checked={true}
        className='radio-button'
      />

      <label>
        Label example
      </label>
    </div>
  )
}
