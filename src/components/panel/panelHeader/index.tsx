import React from 'react'
import InputSearch from '../../inputs/inputSearch'
import Notification from '../../notification/index'
import UserPanel from '../../userPanel'

import './styles.scss'

export default function PanelHeader() {
  return (
    <header className='panel-header'>
      <InputSearch />

      <Notification count={2} />

      <UserPanel />
    </header>
  )
}
