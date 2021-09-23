import React from 'react'

import './styles.scss'
import { IConfirmedOrder } from '../../interfaces/orderInterfaces'
import carMock from '../../assets/mocks/car-mock.png'

export default function OrderListItem(props: IConfirmedOrder) {
  return (
    <li className='order-list-item'>
      <div className='order-list-item__item-wrapper'>
        <img
          className='order-list-item__item-wrapper--image'
          src={carMock}
          alt="logo"
        />
      </div>

      <p className='order-list-item__info'>
        <span>
          { props.carId.name }
        </span> в
        <span>
          { props.pointId.cityId.name }
        </span>, { props.pointId.address }
        { props.dateFrom } - { props.dateTo } Цвет: { props.color }
      </p>
    </li>
  )
}
