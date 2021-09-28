import React from 'react'

import './styles.scss'
import { IOrder } from '../../../interfaces/orderInterfaces'
import ready from '../../../assets/SVG/ready.svg'
import cancel from '../../../assets/SVG/cancel.svg'
import edit from '../../../assets/SVG/edit.svg'
import MenuButton from '../../button/menuButton'

interface Props {
  order: IOrder,
  orderStatus: string,
  onSetOrderComplete: (order: IOrder) => void,
  onSetOrderCancel: (order: IOrder) => void
}

export default function ButtonsMenu(props: Props) {
  return (
    <div className='buttons-menu'>
      {
        props.orderStatus !== 'Отмененые' && props.orderStatus !== 'Подтвержденные' &&
        <MenuButton
          icon={ready}
          onClick={() => props.onSetOrderComplete(props.order)}
        >
          Готово
        </MenuButton>
      }

      {
        props.orderStatus !== 'Отмененые' &&
        <MenuButton
          icon={cancel}
          onClick={() => props.onSetOrderCancel(props.order)}
        >
          Отмена
        </MenuButton>
      }

      <MenuButton icon={edit}>
        Изменить
      </MenuButton>
    </div>
  )
}
