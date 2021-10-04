import React from 'react'

import './styles.scss'

interface Props {
  name: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function TextArea(props: Props) {
  return (
    <textarea
      className='text-area'
      value={props.value}
      name={props.name}
      placeholder='Введите описание ...'
      wrap="hard"
      maxLength={80}
      onChange={(e) => props.onChange(e)}
    />
  )
}
