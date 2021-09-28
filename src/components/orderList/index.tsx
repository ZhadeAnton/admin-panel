import React from 'react'

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHooks'
import {
  setOrderStatusCancel,
  setOrderStatusComplete } from '../../redux/order/orderActionCreators'
import {
  getOrderStatusCancelSelector,
  getOrderStatusCompleteSelector } from '../../redux/order/orderSelectors'
import { IOrder } from '../../interfaces/orderInterfaces'
import OrderListItem from '../orderListItem'

export default function OrderList() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const accessToken = state.auth.authData?.accessToken!
  const orders = state.order.orders
  const completeStatus = getOrderStatusCompleteSelector(state)
  const cancelStatus = getOrderStatusCancelSelector(state)

  const handleSetOrderStatusComplete = (order: IOrder) => {
    dispatch(setOrderStatusComplete(accessToken, order, completeStatus))
  }

  const handleSetOrderStatusCancel = (order: IOrder) => {
    dispatch(setOrderStatusCancel(accessToken, order, cancelStatus))
  }

  return (
    <section className='order-list'>
      {
        orders.map((order, i) => (
          <OrderListItem
            key={i}
            order={order}
            onSetOrderComplete={handleSetOrderStatusComplete}
            onSetOrderCancel={handleSetOrderStatusCancel}
          />
        ))
      }
    </section>
  )
}
