import { IOrder } from '../../interfaces/orderInterfaces'
import * as types from './orderActionTypes'

export const getOrders = (accessToken: string, currentPage: number)
  : types.IGetOrders => ({
  type: types.GET_ORDERS,
  payload: { accessToken, currentPage }
})

export const getOrdersSuccess = (orders: Array<IOrder>, count: number)
  : types.IGetOrdersSuccess => ({
  type: types.GET_ORDERS_SUCCESS,
  payload: { orders, count }
})
