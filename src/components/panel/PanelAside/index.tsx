import React from 'react'

import './styles.scss'
import Logo from '../../../assets/SVG/logo.svg'

export default function PanelAside() {
  return (
    <aside className='panel-aside'>
      <div className='panel-aside__header'>
        <img
          src={Logo}
          alt="Logo"
          className='panel-aside__header--image'
        />

        <span className='panel-aside__header--title'>
          Need for car
        </span>
      </div>
    </aside>
  )
}
