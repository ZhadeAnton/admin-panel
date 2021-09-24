import React from 'react'
import moment from 'moment'

import './styles.scss'
import carImage from '../../assets/mocks/car-mock.png'
import { IOrder } from '../../interfaces/orderInterfaces'
import { getCarImage } from '../../utils/carUtils'

interface Props {
  order: IOrder
}

export default function OrderListItem(props: Props) {
  const image = props.order.carId
  ? getCarImage(props.order.carId.thumbnail!.path)
  : carImage

  return (
    <li className='order-list-item'>
      <div className='order-list-item__item-wrapper'>
        <img
          className='order-list-item__item-wrapper--image'
          src={image}
          alt="car"
        />
      </div>

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
    </li>
  )
}
