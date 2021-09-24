import React from 'react'
import { Menu, Dropdown } from 'antd';

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHooks';
import { logOut } from '../../redux/auth/authActionCreators';
import { ReactComponent as DropdownIcon } from '../../assets/SVG/dropdown.svg'
import UserAvatar from './userAvatar'

export default function UserPanel() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const accessToken = state.auth.authData?.accessToken!

  const handleLogOut = () => {
    dispatch(logOut(accessToken))
  }

  return (
    <div className='user-panel'>
      <Dropdown
        overlay={(
          <Menu>
            <Menu.Item key="1" disabled>
              Настройки
            </Menu.Item>
            <Menu.Item key="2" disabled>
              Меню
            </Menu.Item>
            <Menu.Item key="3" onClick={handleLogOut}>
              Выйти
            </Menu.Item>
          </Menu>
        )}
        trigger={['click']}
      >
        <div className='user-panel__dropdown'>
          <UserAvatar />

          <span className='user-panel__name'>
            Admin
          </span>

          <DropdownIcon />
        </div>
      </Dropdown>
    </div>
  )
}
