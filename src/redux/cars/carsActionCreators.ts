import { ICarFromDB } from '../../interfaces/carInterfaces'
import * as types from './carsActionTypes'

export const getCars = (): types.IGetCars => ({
  type: types.GET_CARS
})

export const getCarsSuccess = (cars: Array<ICarFromDB>, count: number)
  : types.IGetCarsSuccess => ({
  type: types.GET_CARS_SUCCESS,
  payload: { cars, count }
})
