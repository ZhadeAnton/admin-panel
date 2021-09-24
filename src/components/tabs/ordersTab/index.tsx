import React, { useEffect } from 'react'

import './styles.scss'
import { getOrders } from '../../../redux/order/orderActionCreators'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHooks'
import OrderList from '../../orderList'
import PanelTitle from '../../panel/panelTitle'
import SelectPrimary from '../../inputs/selectPrimary'
import Button from '../../button/buttonPrimary'

export default function OrdersTab() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const accessToken = state.auth.authData?.accessToken
  const currentPage = state.order.currentPage
  const orders = state.order.orders

  useEffect(() => {
    if (accessToken) dispatch(getOrders(accessToken, currentPage))
  }, [])

  if (!orders) return

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

        <div className='orders-tab__orders'>
          <OrderList orderList={orders} />
        </div>

        <div className='orders-tab__footer'>
          Footer
        </div>
      </div>
    </section>
  )
}
