import React from 'react'

import './styles.scss'

interface Props {
  children: string,
  icon: any,
  onClick?: () => void
}

export default function MenuButton(props: Props) {
  return (
    <button
      className='menu-button'
      onClick={props.onClick}
    >
      <img src={props.icon} alt="icon" />

      <span className='menu-button__title'>
        { props.children }
      </span>
    </button>
  )
}
