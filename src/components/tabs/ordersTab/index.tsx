import React, { useEffect } from 'react'

import './styles.scss'
import { getOrders } from '../../../redux/order/orderActionCreators'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHooks'
import ButtonsMenu from '../../forms/buttonsMenu'

export default function OrdersTab() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const accessToken = state.auth.authData?.accessToken
  const currentPage = state.order.currentPage

  useEffect(() => {
    if (accessToken) dispatch(getOrders(accessToken, currentPage))
  }, [])

  return (
    <section>
      Ordersa
      <ButtonsMenu />
    </section>
  )
}
