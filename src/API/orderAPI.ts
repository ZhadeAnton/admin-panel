/* eslint-disable max-len */
import axios from './axiosConfig';
import { IOrderByFilter, ISetOrderComplete } from '../interfaces/orderInterfaces';
import { getOrderFilters, getOrderStatusComplete } from '../utils/orderUtils';

export const getOrdersByFilter = (
    {createdAt, carId, cityId, statusId, accessToken, currentPage}: IOrderByFilter) => {
  return axios.get(getOrderFilters({createdAt, carId, cityId, statusId, currentPage}), {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }})
}

export const getOrderStatuses = (accessToken: string) => {
  return axios.get('db/orderStatus', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
}

export const setOrderStatusComplete = (order: ISetOrderComplete) => {
  return axios.put(`db/order/${order.order.id}`, getOrderStatusComplete(order), {
    headers: {
      'Authorization': `Bearer ${order.accessToken}`
    }
  })
}

export const setOrderStatusCancel = (order: ISetOrderComplete) => {
  return axios.put(`db/order/${order.order.id}`, getOrderStatusComplete(order), {
    headers: {
      'Authorization': `Bearer ${order.accessToken}`
    }
  })
}
