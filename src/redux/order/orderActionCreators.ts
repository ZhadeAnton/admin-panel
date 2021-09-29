import { IFnSetOrderComplete, IOrderByFilter } from './../../interfaces/orderInterfaces';
import { IOrder, IOrderStatus } from '../../interfaces/orderInterfaces'
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

export const getOrdersByFilters = ({carId, cityId, statusId, accessToken}: IOrderByFilter)
  : types.IGetOrdersByFilters => ({
  type: types.GET_ORDERS_BY_FILTER,
  payload: { carId, cityId, statusId, accessToken }
})

export const getOrdersByFiltersSuccess = (orders: Array<IOrder>, count: number)
  : types.IGetOrdersByFiltersSuccess => ({
  type: types.GET_ORDERS_BY_FILTER_SUCCESS,
  payload: { orders, count }
})

export const getOrderStatuses = (accessToken: string): types.IGetOrderStatuses => ({
  type: types.GET_ORDER_STATUSES,
  payload: accessToken
})

export const getOrderStatusesSuccess = (orderStatuses: Array<IOrderStatus>)
  : types.IGetOrderStatusesSuccess => ({
  type: types.GET_ORDER_STATUSES_SUCCESS,
  payload: orderStatuses
})

export const setOrderStatusComplete: IFnSetOrderComplete = (
    accessToken, order, newOrderId)
    : types.ISetOrderStatusComplete => ({
  type: types.SET_ORDER_STATUS_COMPLETE,
  payload: { accessToken, order, newOrderId }
})

export const setOrderStatusCompleteSuccess = (newOrder: IOrder)
  : types.ISetOrderStatusCompleteSuccess => ({
  type: types.SET_ORDER_STATUS_COMPLETE_SUCCESS,
  payload: newOrder
})

export const setOrderStatusCancel: IFnSetOrderComplete = (
    accessToken, order, newOrderId)
  : types.ISetOrderStatusCancel => ({
  type: types.SET_ORDER_STATUS_CANCEL,
  payload: { accessToken, order, newOrderId }
})

export const setOrderStatusCancelSuccess = (newOrder: IOrder)
  : types.ISetOrderStatusCancelSuccess => ({
  type: types.SET_ORDER_STATUS_CANCEL_SUCCESS,
  payload: newOrder
})

export const setOrderStatusCancelFailure = ()
  : types.ISetOrderStatusCancelFailure => ({
  type: types.SET_ORDER_STATUS_CANCEL_FAILURE
})

export const setOrderStatusCompleteFailure = ()
  : types.ISetOrderStatusCompleteFailure => ({
  type: types.SET_ORDER_STATUS_COMPLETE_FAILURE
})

export const hideOrderNotification = (): types.IHideOrderNotification => ({
  type: types.HIDE_ORDER_NOTIFICATION
})
