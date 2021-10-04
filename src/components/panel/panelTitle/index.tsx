import React from 'react'

import './styles.scss'

interface Props {
  title: string
}

export default function PanelTitle(props: Props) {
  return (
    <h1 className='panel-title'>
      { props.title }
    </h1>
  )
}
