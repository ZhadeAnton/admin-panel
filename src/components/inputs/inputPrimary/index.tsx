import React, { useState } from 'react'

import './styles.scss'

interface Props {
  type: 'password' | 'text',
  name: string,
  value?: string,
  error?: {
    condition?: boolean,
    message: string
  },
  isOnlyNumber?: boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputPrimary(props: Props) {
  const [error, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e)
    if (e.target.value) setError(false)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (props.isOnlyNumber && !/[0-9]/.test(event.key)) {
      setError(true)
      event.preventDefault()
    }
  }

  return (
    <div className='input-primary'>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        autoComplete="on"
        maxLength={20}
        onKeyPress={(event) => handleKeyPress(event)}
        onChange={handleChange}
        disabled={props.error?.condition}
        className='input-primary__input'
      />

      {
        props.error?.condition || error &&
        <span className='input-primary__error'>
          { props.error?.message }
        </span>
      }
    </div>
  )
}
