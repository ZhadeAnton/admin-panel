import React from 'react'

import './styles.scss'
import { IOrder } from '../../interfaces/orderInterfaces'
import OrderListItem from '../orderListItem'

interface Props {
  orderList: Array<IOrder>
}

export default function OrderList(props: Props) {
  return (
    <section className='order-list'>
      {
        props.orderList.map((order, i) => (
          <OrderListItem key={i} order={order} />
        ))
      }
    </section>
  )
}
