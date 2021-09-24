import React, { useCallback } from 'react'

import './styles.scss'
import { getOrders } from '../../../redux/order/orderActionCreators'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHooks'
import OrderList from '../../orderList'
import PanelTitle from '../../panel/panelTitle'
import SelectPrimary from '../../inputs/selectPrimary'
import Button from '../../button/buttonPrimary'
import CustomPagination from '../../pagination'

export default function OrdersTab() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const accessToken = state.auth.authData?.accessToken!
  const orders = state.order.orders
  const count = state.order.count

  const handlePagination = useCallback((page: number) => {
    console.log(page)
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
          <OrderList orderList={orders} />
        </div>

        <div className='orders-tab__main--footer'>
          <CustomPagination
            defaultPageSize={4}
            pagesLength={count}
            onChange={handlePagination}
          />
        </div>
      </div>
    </section>
  )
}
