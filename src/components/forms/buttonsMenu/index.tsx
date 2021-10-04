import React from 'react'

import './styles.scss'
import { IOrder } from '../../../interfaces/orderInterfaces'
import ready from '../../../assets/SVG/ready.svg'
import cancel from '../../../assets/SVG/cancel.svg'
import edit from '../../../assets/SVG/edit.svg'
import MenuButton from '../../button/menuButton'

interface Props {
  order: IOrder,
  status: string,
  onSetOrderComplete: (order: IOrder) => void,
  onSetOrderCancel: (order: IOrder) => void,
  isAdaptive?: boolean
}

export default function ButtonsMenu(props: Props) {
  const isReadyButton = props.status !== 'Отмененые' && props.status !== 'Подтвержденные'
  const isCancelButton = props.status !== 'Отмененые'

  return (
    <div className={`buttons-menu${props.isAdaptive ? '-adaptive' : ''}`}>
      {
        isReadyButton &&
        <MenuButton
          icon={ready}
          onClick={() => props.onSetOrderComplete(props.order)}
        >
          Готово
        </MenuButton>
      }

      {
        isCancelButton &&
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
