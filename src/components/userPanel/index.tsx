import React from 'react'

import './styles.scss'
import { ReactComponent as Dropdown } from '../../assets/SVG/dropdown.svg'
import UserAvatar from './userAvatar'

export default function UserPanel() {
  return (
    <div className='user-panel'>
      <UserAvatar />

      <span className='user-panel__name'>
        Admin
      </span>

      <Dropdown />
    </div>
  )
}
