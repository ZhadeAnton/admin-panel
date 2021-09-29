import { IOrder, IOrderStatus } from '../../interfaces/orderInterfaces'
import * as types from './orderActionTypes'

interface IOrderState {
  orders: Array<IOrder>,
  orderStatuses: Array<IOrderStatus>,
  count: number,
  currentPage: number,
  isError: boolean,
  isLoading: boolean
}

const INIT_STATE: IOrderState = {
  orders: [],
  orderStatuses: [],
  count: 0,
  currentPage: 0,
  isError: false,
  isLoading: false
}

const orderReducer = (state = INIT_STATE, action: types.IOrderTypes): IOrderState => {
  switch (action.type) {
    case types.GET_ORDERS_BY_FILTER_SUCCESS:
      return {
        ...state,
        orders: action.payload.orders,
        count: action.payload.count,
        currentPage: state.count !== action.payload.count
          ? state.currentPage = 0
          : state.currentPage,
        isLoading: false
      }

    case types.GET_ORDER_STATUSES_SUCCESS:
      return {
        ...state,
        orderStatuses: action.payload
      }

    case types.SET_ORDER_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }

    case types.SET_ORDER_STATUS_COMPLETE_SUCCESS:
    case types.SET_ORDER_STATUS_CANCEL_SUCCESS:
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload.id)
      }

    case types.SET_ORDER_STATUS_CANCEL_FAILURE:
    case types.SET_ORDER_STATUS_COMPLETE_FAILURE:
      return {
        ...state,
        isError: true
      }

    case types.HIDE_ORDER_NOTIFICATION:
      return {
        ...state,
        isError: false
      }

    default:
      return state
  }
}

export default orderReducer
