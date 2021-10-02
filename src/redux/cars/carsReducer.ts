import { ICarFromDB } from '../../interfaces/carInterfaces'
import * as types from './carsActionTypes'

interface ICarsState {
  cars: Array<ICarFromDB>,
  count: number,
  currentPage: number,
  isLoading: boolean
}

const INIT_STATE: ICarsState = {
  cars: [],
  count: 0,
  currentPage: 0,
  isLoading: false
}

const carsReducer = (state = INIT_STATE, action: types.ICarsTypes): ICarsState => {
  switch (action.type) {
    case types.GET_CARS:
      return {
        ...state,
        isLoading: true
      }

    case types.GET_CARS_SUCCESS:
      return {
        ...state,
        cars: action.payload.cars,
        count: action.payload.count,
        isLoading: false
      }

    case types.SET_CARS_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }

    default:
      return state
  }
}

export default carsReducer
