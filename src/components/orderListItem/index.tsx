import React from 'react'
import moment from 'moment'

import './styles.scss'
import carMock from '../../assets/mocks/car-mock.png'
import { IOrder } from '../../interfaces/orderInterfaces'
import { getCarImage } from '../../utils/carUtils'
import CheckboxSecondary from '../inputs/checkboxSecondary'
import ButtonsMenu from '../forms/buttonsMenu'

interface Props {
  order: IOrder,
  onSetOrderComplete: (order: IOrder) => void
  onSetOrderCancel: (order: IOrder) => void
}

export default function OrderListItem(props: Props) {
  let image
  if (props.order.carId) {
    image = getCarImage(props.order.carId.thumbnail?.path)
  } else {
    image = carMock
  }

  return (
    <li className='order-list-item'>
      <div className='order-list-item__item-wrapper'>
        <img
          className='order-list-item__item-wrapper--image'
          src={image}
          alt="car"
        />

        <div className='order-list-item__info'>
          <div className='order-list-item__info--row'>
            <strong className='order-list-item__info--row-strong'>
              { props.order.carId ? props.order.carId.name : 'Не найдено' }
            </strong>
            &nbsp;в&nbsp;
            <strong className='order-list-item__info--row-strong'>
              { props.order.cityId ? props.order.cityId.name : 'Не найдено' },&nbsp;
            </strong>
            { props.order.pointId ? props.order.pointId.address : 'Не найдено' }&nbsp;
          </div>

          <div className='order-list-item__info--row'>
            { moment(props.order.dateFrom).format('DD.MM.YYYY h:mm') }
            &nbsp;&#9472;&nbsp;
            { moment(props.order.dateTo).format('DD.MM.YYYY h:mm') }
          </div>

          <div className='order-list-item__info--row'>
          Цвет: <strong className='order-list-item__info--row-strong'>
              { props.order.color ?? 'Не выбрано' }
            </strong>
          </div>
        </div>
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
        { props.order.price }
      </div>
      {
        props.order.orderStatusId &&
        <span>{props.order.orderStatusId.name}</span>
      }

      <>
        {
          props.order.orderStatusId &&
          <ButtonsMenu
            order={props.order}
            orderStatus={props.order.orderStatusId.name}
            onSetOrderComplete={props.onSetOrderComplete}
            onSetOrderCancel={props.onSetOrderCancel}
          />
        }
      </>
    </li>
  )
}
