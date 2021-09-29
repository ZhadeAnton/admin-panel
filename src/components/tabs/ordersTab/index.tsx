import React, { useEffect, useState } from 'react'

import './styles.scss'
import {
  getOrders,
  getOrdersByFilters,
  getOrderStatuses,
  hideOrderNotification } from '../../../redux/order/orderActionCreators'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHooks'
import { carOrderSelects } from '../../../utils/orderUtils'
import OrderList from '../../orderList'
import PanelTitle from '../../panel/panelTitle'
import CustomPagination from '../../pagination'
import Alert from '../../alert/index'
import FilterRow from '../../filterRow'

export default function OrdersTab() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const [values, setValues] = useState({
    carId: '600f4a97ad015e0bb6997d37',
    cityId: '5ea07ad3099b810b946c6254',
    statusId: '5e26a1f0099b810b946c5d8b'
  })
  const [alertVisible, setAlertVisible] = useState(false)
  const orders = state.order.orders
  const accessToken = state.auth.authData?.accessToken!
  const count = state.order.count
  const isError = state.order.isError

  useEffect(() => {
    dispatch(getOrderStatuses(accessToken))

    return () => {
      dispatch(getOrderStatuses(accessToken))
    }
  }, [])

  useEffect(() => {
    if (isError) {
      setAlertVisible(true)
      setTimeout(() => {
        dispatch(hideOrderNotification())
        setAlertVisible(false)
      }, 3000)
    }
  }, [isError])

  function handleCloseAlert() {
    setAlertVisible(false)
  }

  const handleOrderFilter = () => {
    dispatch(getOrdersByFilters({...values, accessToken}))
  }

  const handleSelectChange = (value: string, field: string) => {
    setValues((prevState) => ({
      ...prevState,
      [field]: value
    }))
  }

  const handlePagination = (page: number) => {
    dispatch(getOrders(accessToken, page))
  }

  return (
    <section className='orders-tab'>
      <PanelTitle title='Заказ' />

      <div className='orders-tab__main'>
        <FilterRow
          selects={carOrderSelects}
          onFilter={handleOrderFilter}
          onChangeSelect={handleSelectChange}
        />

        <OrderList orders={orders} />

        <CustomPagination
          defaultPageSize={4}
          pagesLength={count}
          onChange={handlePagination}
        />
      </div>

      {
        alertVisible &&
        <Alert
          type='error'
          onClose={handleCloseAlert}
        >
          Невозможно редактировать заказ!
        </Alert>
      }
    </section>
  )
}
