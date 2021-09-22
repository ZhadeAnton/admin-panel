import React from 'react'

import './styles.scss'

interface Props {
  type: 'password' | 'text'
}

export default function InputPrimary(props: Props) {
  return (
    <input
      type={props.type}
      autoComplete="on"
      className='input-primary'
    />
  )
}
