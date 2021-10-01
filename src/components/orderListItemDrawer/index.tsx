import React from 'react'
import { Drawer } from 'antd'

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHooks'
import { IOrder } from '../../interfaces/orderInterfaces'
import { getCarImage } from '../../utils/carUtils'
import {
  removeCurrentOrder,
  setOrderStatusCancel,
  setOrderStatusComplete } from '../../redux/order/orderActionCreators'
import {
  getOrderStatusCancelSelector,
  getOrderStatusCompleteSelector } from '../../redux/order/orderSelectors'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import CheckboxSecondary from '../inputs/checkboxSecondary'
import ButtonsMenu from '../forms/buttonsMenu'
import CarOrderInfo from '../carOrderInfo'

export default function OrderListItemDrawer() {
  const windoDimentions = useWindowDimensions()
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const selectedOrder = state.order.selectedOrder
  const accessToken = state.auth.authData?.accessToken!
  const completeStatus = getOrderStatusCompleteSelector(state)
  const cancelStatus = getOrderStatusCancelSelector(state)
  const drawerWidth = windoDimentions.width < 470 ? 250 : 300

  const handleCloseDrawer = () => {
    dispatch(removeCurrentOrder())
  }

  const handleSetOrderStatusComplete = (order: IOrder) => {
    dispatch(setOrderStatusComplete(accessToken, order, completeStatus))
    handleCloseDrawer()
  }

  const handleSetOrderStatusCancel = (order: IOrder) => {
    dispatch(setOrderStatusCancel(accessToken, order, cancelStatus))
    handleCloseDrawer()
  }

  return (
    <Drawer
      placement='right'
      getContainer={false}
      width={drawerWidth}
      visible={!!selectedOrder}
      onClose={handleCloseDrawer}
      title="Меню заказа"
      className='order-drawer'
    >
      {
        selectedOrder &&
        <div className='order-drawer__image-wrapper'>
          <img
            className='order-drawer__image-wrapper--image'
            src={getCarImage(selectedOrder?.carId?.thumbnail?.path)}
            alt="car"
          />
        </div>
      }

      {
        selectedOrder &&
        <div className='order-drawer__info'>
          <CarOrderInfo order={selectedOrder} />
        </div>
      }

      <div className='order-drawer__price'>
        <span>
          Общая стоимость:&nbsp;
        </span>
        { selectedOrder?.price } &#8381;
      </div>

      {
        selectedOrder &&
        <div className='order-drawer__checboxes'>
          <CheckboxSecondary
            checked={selectedOrder.isFullTank}
            label='Полный бак'
          />

          <CheckboxSecondary
            checked={selectedOrder.isNeedChildChair}
            label='Детское кресло'
          />

          <CheckboxSecondary
            checked={selectedOrder.isRightWheel}
            label='Правый руль'
          />
        </div>
      }


      {
        selectedOrder &&
        <div className='order-drawer__buttons'>
          <ButtonsMenu
            order={selectedOrder}
            orderStatus={selectedOrder.orderStatusId.name}
            onSetOrderComplete={handleSetOrderStatusComplete}
            onSetOrderCancel={handleSetOrderStatusCancel}
          />
        </div>
      }
    </Drawer>
  )
}
