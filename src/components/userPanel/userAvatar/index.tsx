import React from 'react'

import './styles.scss'
import avatar from '../../../assets/PNG/avatar.png'

export default function UserAvatar() {
  return (
    <div className='user-avatar'>
      <img
        src={avatar}
        alt="avatar"
        className='user-avatar__image'
      />
    </div>
  )
}
