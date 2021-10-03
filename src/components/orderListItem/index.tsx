import React from 'react'

import './styles.scss'
import { IOrder } from '../../interfaces/orderInterfaces'
import { getCarImage } from '../../utils/carUtils'
import CheckboxSecondary from '../inputs/checkboxSecondary'
import ButtonsMenu from '../forms/buttonsMenu'
import CarOrderInfo from '../carOrderInfo'

interface Props {
  order: IOrder,
  selected: boolean,
  onSetOrderComplete: (order: IOrder) => void
  onSetOrderCancel: (order: IOrder) => void,
  onSelectOrder: (order: IOrder) => void
}

export default function OrderListItem(props: Props) {
  return (
    <li
      className={`order-list-item${props.selected ? '-selected' : ''}`}
      onClick={() => props.onSelectOrder(props.order)}
    >
      <div className='order-list-item__item-wrapper'>
        <img
          className='order-list-item__item-wrapper--image'
          src={getCarImage(props.order.carId)}
          alt="car"
        />

        <CarOrderInfo order={props.order} />
      </div>

      <div className='order-list-item__checkbox-group'>
        <CheckboxSecondary
          checked={props.order.isFullTank}
          label='Полный бак'
        />

        <CheckboxSecondary
          checked={props.order.isNeedChildChair}
          label='Детское кресло'
        />

        <CheckboxSecondary
          checked={props.order.isRightWheel}
          label='Правый руль'
        />
      </div>

      <div className='order-list-item__price'>
        { props.order.price && Math.trunc(props.order.price) } &#8381;
      </div>

      <div className='order-list-item__menu'>
        {
          props.order.orderStatusId &&
          <ButtonsMenu
            order={props.order}
            isAdaptive
            orderStatus={props.order.orderStatusId.name}
            onSetOrderComplete={props.onSetOrderComplete}
            onSetOrderCancel={props.onSetOrderCancel}
          />
        }
      </div>
    </li>
  )
}
