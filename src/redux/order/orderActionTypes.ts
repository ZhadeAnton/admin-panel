import { IOrder } from '../../interfaces/orderInterfaces'

export const GET_ORDERS = 'GET_ORDERS'
export interface IGetOrders {
  type: typeof GET_ORDERS,
  payload: { accessToken: string, currentPage: number }
}

export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS'
export interface IGetOrdersSuccess {
  type: typeof GET_ORDERS_SUCCESS,
  payload: { orders: Array<IOrder>, count: number }
}

export type IOrderTypes =
| IGetOrders
| IGetOrdersSuccess
