import { IOrder, IOrderByFilter, IOrderStatus } from '../../interfaces/orderInterfaces'

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

export const GET_ORDERS_BY_FILTER = 'GET_ORDERS_BY_FILTER'
export interface IGetOrdersByFilters {
  type: typeof GET_ORDERS_BY_FILTER,
  payload: IOrderByFilter
}

export const GET_ORDERS_BY_FILTER_SUCCESS = 'GET_ORDERS_BY_FILTER_SUCCESS'
export interface IGetOrdersByFiltersSuccess {
  type: typeof GET_ORDERS_BY_FILTER_SUCCESS,
  payload: { orders: Array<IOrder>, count: number }
}

export const GET_ORDER_STATUSES = 'GET_ORDER_STATUSES'
export interface IGetOrderStatuses {
  type: typeof GET_ORDER_STATUSES,
  payload: string
}

export const GET_ORDER_STATUSES_SUCCESS = 'GET_ORDER_STATUSES_SUCCESS'
export interface IGetOrderStatusesSuccess {
  type: typeof GET_ORDER_STATUSES_SUCCESS,
  payload: Array<IOrderStatus>
}

export const SET_ORDER_STATUS_COMPLETE = 'SET_ORDER_STATUS_COMPLETE'
export interface ISetOrderStatusComplete {
  type: typeof SET_ORDER_STATUS_COMPLETE,
  payload: { accessToken: string, order: IOrder, newOrderId: IOrderStatus | undefined }
}

export const SET_ORDER_STATUS_COMPLETE_SUCCESS = 'SET_ORDER_STATUS_COMPLETE_SUCCESS'
export interface ISetOrderStatusCompleteSuccess {
  type: typeof SET_ORDER_STATUS_COMPLETE_SUCCESS,
  payload: IOrder
}

export const SET_ORDER_STATUS_CANCEL = 'SET_ORDER_STATUS_CANCEL'
export interface ISetOrderStatusCancel {
  type: typeof SET_ORDER_STATUS_CANCEL,
  payload: { accessToken: string, order: IOrder, newOrderId: IOrderStatus | undefined }
}

export const SET_ORDER_STATUS_CANCEL_SUCCESS = 'SET_ORDER_STATUS_CANCEL_SUCCESS'
export interface ISetOrderStatusCancelSuccess {
  type: typeof SET_ORDER_STATUS_CANCEL_SUCCESS,
  payload: IOrder
}

export const SET_ORDER_STATUS_CANCEL_FAILURE = 'SET_ORDER_STATUS_CANCEL_FAILURE'
export interface ISetOrderStatusCancelFailure {
  type: typeof SET_ORDER_STATUS_CANCEL_FAILURE
}

export const SET_ORDER_STATUS_COMPLETE_FAILURE = 'SET_ORDER_STATUS_COMPLETE_FAILURE'
export interface ISetOrderStatusCompleteFailure {
  type: typeof SET_ORDER_STATUS_COMPLETE_FAILURE
}

export const HIDE_ORDER_NOTIFICATION = 'HIDE_ORDER_NOTIFICATION'
export interface IHideOrderNotification {
  type: typeof HIDE_ORDER_NOTIFICATION
}

export type IOrderTypes =
| IGetOrders
| IGetOrdersSuccess
| IGetOrdersByFilters
| IGetOrdersByFiltersSuccess
| IGetOrderStatuses
| IGetOrderStatusesSuccess
| ISetOrderStatusComplete
| ISetOrderStatusCancel
| ISetOrderStatusCompleteSuccess
| ISetOrderStatusCancelSuccess
| ISetOrderStatusCancelFailure
| ISetOrderStatusCompleteFailure
| IHideOrderNotification
