import React from 'react'
import { Empty } from 'antd';

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHooks'
import {
  selectCurrentOrder,
  setOrderStatusCancel,
  setOrderStatusComplete } from '../../redux/order/orderActionCreators'
import {
  getOrderStatusCancelSelector,
  getOrderStatusCompleteSelector } from '../../redux/order/orderSelectors'
import { IOrder } from '../../interfaces/orderInterfaces'
import OrderListItem from '../orderListItem'

interface Props {
  orders: Array<IOrder>
}

export default function OrderList(props: Props) {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const selectedOrderId = state.order.selectedOrder?.id
  const accessToken = state.auth.authData?.accessToken!
  const completeStatus = getOrderStatusCompleteSelector(state)
  const cancelStatus = getOrderStatusCancelSelector(state)

  const handleSetOrderStatusComplete = (order: IOrder) => {
    dispatch(setOrderStatusComplete(accessToken, order, completeStatus))
  }

  const handleSetOrderStatusCancel = (order: IOrder) => {
    dispatch(setOrderStatusCancel(accessToken, order, cancelStatus))
  }

  const handleSelectOrder = (order: IOrder) => {
    dispatch(selectCurrentOrder(order))
  }

  return (
    <section className='order-list'>
      {
        props.orders.length > 0
        ? props.orders.map((order, i) => (
          <OrderListItem
            key={i}
            order={order}
            selected={order.id === selectedOrderId}
            onSetOrderComplete={handleSetOrderStatusComplete}
            onSetOrderCancel={handleSetOrderStatusCancel}
            onSelectOrder={handleSelectOrder}
          />
        ))
        : (
          <div className='order-list__empty'>
            <Empty />
          </div>
        )
      }
    </section>
  )
}
