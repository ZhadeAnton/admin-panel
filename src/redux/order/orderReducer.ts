import { IOrder } from '../../interfaces/orderInterfaces'
import * as types from './orderActionTypes'

interface IOrderState {
  orders: Array<IOrder>,
  currentPage: number,
  isLoading: boolean
}

const INIT_STATE: IOrderState = {
  orders: [],
  currentPage: 0,
  isLoading: false
}

const orderReducer = (state = INIT_STATE, action: types.IOrderTypes): IOrderState => {
  switch (action.type) {
    case types.GET_ORDERS:
      return {
        ...state,
        isLoading: true
      }

    case types.GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        isLoading: false
      }

    default:
      return state
  }
}

export default orderReducer
