import React from 'react'

import './styles.scss'
import ready from '../../../assets/SVG/ready.svg'
import cancel from '../../../assets/SVG/cancel.svg'
import edit from '../../../assets/SVG/edit.svg'
import MenuButton from '../../button/menuButton'

export default function ButtonsMenu() {
  return (
    <div className='buttons-menu'>
      <MenuButton icon={ready}>
        Готово
      </MenuButton>

      <MenuButton icon={cancel}>
        Отмена
      </MenuButton>

      <MenuButton icon={edit}>
        Изменить
      </MenuButton>
    </div>
  )
}
