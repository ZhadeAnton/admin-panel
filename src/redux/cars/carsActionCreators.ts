import { ICarFromDB } from '../../interfaces/carInterfaces'
import * as types from './carsActionTypes'

export const getCars = (category: string | null, currentPage: number)
  : types.IGetCars => ({
  type: types.GET_CARS,
  payload: { category, currentPage }
})

export const getCarsSuccess = (cars: Array<ICarFromDB>, count: number)
  : types.IGetCarsSuccess => ({
  type: types.GET_CARS_SUCCESS,
  payload: { cars, count }
})

export const setCarsCurrentPage = (currentPage: number): types.ISetCarsCurrentPage => ({
  type: types.SET_CARS_CURRENT_PAGE,
  payload: currentPage
})
