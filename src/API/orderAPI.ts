/* eslint-disable max-len */
import axios from 'axios';
import { IOrder, IOrderByFilter, IOrderStatus } from '../interfaces/orderInterfaces';
import { getFilterByCarId, getFilterByDate } from '../utils/orderUtils';

const url = process.env.REACT_APP_DEFAULT_URL
const appId = process.env.REACT_APP_APPLICATION_ID
const ordersLimit = 4

interface ISetOrderComplete {
  accessToken: string,
  order: IOrder,
  newOrderId: IOrderStatus[] | undefined
}

export const getOrdersByFilter = (
    {createdAt, carId, cityId, statusId, accessToken, currentPage}: IOrderByFilter) => {
  const carFilter = getFilterByCarId(carId)
  const dateFilter = getFilterByDate(createdAt)

  return axios({
    method: 'GET',
    url: `${url}api/db/order?${dateFilter}${carFilter}cityId=${cityId}&orderStatusId=${statusId}&limit=${ordersLimit}&page=${currentPage}`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  })
}

export const getOrderStatuses = (accessToken: string) => {
  return axios({
    method: 'GET',
    url: `${url}api/db/orderStatus`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  })
}

export const setOrderStatusComplete = (payload: ISetOrderComplete) => {
  return axios({
    method: 'PUT',
    url: `${url}api/db/order/${payload.order.id}`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${payload.accessToken}`
    },
    data: {
      ...payload.order,
      orderStatusId: {
        id: payload.newOrderId![0].id,
        name: payload.newOrderId![0].name
      }
    }
  })
}

export const setOrderStatusCancel = (payload: ISetOrderComplete) => {
  return axios({
    method: 'PUT',
    url: `${url}api/db/order/${payload.order.id}`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${payload.accessToken}`
    },
    data: {
      ...payload.order,
      orderStatusId: {
        id: payload.newOrderId![0].id,
        name: payload.newOrderId![0].name
      }
    }
  })
}
