import React from 'react'
import moment from 'moment'

import './styles.scss'
import { IOrder } from '../../interfaces/orderInterfaces'

interface Props {
  order: IOrder
}

export default function CarOrderInfo(props: Props) {
  return (
    <div className='car-order-info'>
      <div className='car-order-info__row'>
        <strong className='car-order-info__row-strong'>
          { props.order.carId ? props.order.carId.name : 'Не найдено' }
        </strong>
            &nbsp;в&nbsp;
        <strong className='car-order-info__row-strong'>
          { props.order.cityId ? props.order.cityId.name : 'Не найдено' },&nbsp;
        </strong>
        { props.order.pointId ? props.order.pointId.address : 'Не найдено' }&nbsp;
      </div>

      <div className='car-order-info__row'>
        <span className='car-order-info__date'>
          { moment(props.order.dateFrom).format('DD.MM.YYYY h:mm') }
          &nbsp;&#9472;&nbsp;
          { moment(props.order.dateTo).format('DD.MM.YYYY h:mm') }
        </span>
      </div>

      <div className='car-order-info__row'>
          Цвет: <strong className='car-order-info__row-strong'>
          { props.order.color ?? 'Не выбрано' }
        </strong>
      </div>
    </div>
  )
}
