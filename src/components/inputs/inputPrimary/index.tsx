import React from 'react'

import './styles.scss'

interface Props {
  type: 'password' | 'text',
  name: string,
  value?: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputPrimary(props: Props) {
  return (
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      autoComplete="on"
      onChange={(e) => props.onChange(e)}
      className='input-primary'
    />
  )
}
