import React, { useEffect, useState, useCallback } from 'react'

import './styles.scss'
import {
  getOrders,
  getOrderStatuses,
  hideOrderNotification } from '../../../redux/order/orderActionCreators'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHooks'
import OrderList from '../../orderList'
import PanelTitle from '../../panel/panelTitle'
import SelectPrimary from '../../inputs/selectPrimary'
import Button from '../../button/buttonPrimary'
import CustomPagination from '../../pagination'
import Alert from '../../alert/index'

export default function OrdersTab() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const [alertVisible, setAlertVisible] = useState(false)
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

  const handlePagination = useCallback((page: number) => {
    dispatch(getOrders(accessToken, page))
  }, [])

  return (
    <section className='orders-tab'>
      <PanelTitle title='Заказ' />

      <div className='orders-tab__main'>
        <div className='orders-tab__main--header'>
          <div className='orders-tab__main--options'>
            <SelectPrimary
              defaultValue='За неделю'
              options={['За неделю', 'За месяц', 'За день']}
            />

            <SelectPrimary
              defaultValue='За неделю'
              options={['За неделю', 'За месяц', 'За день']}
            />

            <SelectPrimary
              defaultValue='За неделю'
              options={['За неделю', 'За месяц', 'За день']}
            />

            <SelectPrimary
              defaultValue='За неделю'
              options={['За неделю', 'За месяц', 'За день']}
            />
          </div>

          <div className='orders-tab__main--button'>
            <Button
              backgrond='blue'
              onClick={() => console.log('fire')}
            >
              Применить
            </Button>
          </div>
        </div>

        <div className='orders-tab__main--orders'>
          <OrderList />
        </div>

        <div className='orders-tab__main--footer'>
          <CustomPagination
            defaultPageSize={4}
            pagesLength={count}
            onChange={handlePagination}
          />
        </div>
      </div>

      { alertVisible &&
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
