import React, { useEffect } from 'react'

import './styles.scss'
import { getOrders } from '../../../redux/order/orderActionCreators'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHooks'
import OrderList from '../../orderList'

export default function OrdersTab() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const accessToken = state.auth.authData?.accessToken
  const currentPage = state.order.currentPage
  const orders = state.order.orders
  // const count = state.order.count

  useEffect(() => {
    if (accessToken) dispatch(getOrders(accessToken, currentPage))
  }, [])

  if (!orders) return

  return (
    <section className='orders-tab'>
      <div className='orders-tab__header'>
        Header
      </div>

      <div className='orders-tab__list'>
        <OrderList orderList={orders} />
      </div>

      <div className='orders-tab__footer'>
        Footer
      </div>
    </section>
  )
}
