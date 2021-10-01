import { ICarFromDB } from '../../interfaces/carInterfaces'
import * as types from './carsActionTypes'

interface ICarsState {
  cars: Array<ICarFromDB>,
  isLoading: boolean
}

const INIT_STATE: ICarsState = {
  cars: [],
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
        cars: action.payload,
        isLoading: false
      }

    default:
      return state
  }
}

export default carsReducer
