import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'

import './styles.scss'
import {
  getOrdersByFilters,
  getOrderStatuses,
  hideOrderNotification,
  setOrderCurrentPage} from '../../../redux/order/orderActionCreators'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHooks'
import { carOrderSelects } from '../../../utils/orderUtils'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import OrderList from '../../orderList'
import PanelTitle from '../../panel/panelTitle'
import CustomPagination from '../../pagination'
import Alert from '../../alert/index'
import FilterRow from '../../filterRow'
import OrderListItemDrawer from '../../orderListItemDrawer'

export default function OrdersTab() {
  const dispatch = useAppDispatch()
  const windowDimentions = useWindowDimensions()
  const state = useAppSelector((state) => state)
  const [values, setValues] = useState({
    createdAt: 'За неделю',
    carId: 'Любая',
    cityId: '5ea07ad3099b810b946c6254',
    statusId: '5e26a191099b810b946c5d89'
  })
  const [alertVisible, setAlertVisible] = useState(false)
  const orders = state.order.orders
  const accessToken = state.auth.authData?.accessToken!
  const count = state.order.count
  const currentPage = state.order.currentPage
  const isError = state.order.isError
  const isLoading = state.order.isLoading

  useEffect(() => {
    dispatch(getOrderStatuses(accessToken))
    dispatch(getOrdersByFilters({...values, accessToken, currentPage}))

    return () => {
      dispatch(getOrderStatuses(accessToken))
      dispatch(getOrdersByFilters({...values, accessToken, currentPage}))
    }
  }, [])

  useEffect(() => {
    if (accessToken) handleOrderFilter()
    return () => handleOrderFilter()
  }, [currentPage])

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

  const handleChangeOrderPage = (currentPage: number) => {
    dispatch(setOrderCurrentPage(currentPage))
  }

  const handleOrderFilter = () => {
    dispatch(getOrdersByFilters({...values, accessToken, currentPage}))
  }

  const handleSelectChange = (value: string, field: string) => {
    setValues((prevState) => ({
      ...prevState,
      [field]: value
    }))
  }

  return (
    <Spin tip='Loading' spinning={isLoading}>
      <section className='orders-tab'>
        <PanelTitle title='Заказ' />

        <div className='orders-tab__main'>
          <FilterRow
            selects={carOrderSelects}
            onFilter={handleOrderFilter}
            onChangeSelect={handleSelectChange}
          />

          <OrderList orders={orders} />

          {
            windowDimentions.width < 1024 &&
            <OrderListItemDrawer />
          }

          <CustomPagination
            defaultPageSize={4}
            pagesLength={count}
            currentPage={currentPage}
            onChange={handleChangeOrderPage}
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
    </Spin>
  )
}
