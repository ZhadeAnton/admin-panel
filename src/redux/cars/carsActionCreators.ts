import { ICar } from '../../interfaces/carInterfaces'
import * as types from './carsActionTypes'

export const getCars = (category: string | null, currentPage: number)
  : types.IGetCars => ({
  type: types.GET_CARS,
  payload: { category, currentPage }
})

export const getCarsSuccess = (cars: Array<ICar>, count: number)
  : types.IGetCarsSuccess => ({
  type: types.GET_CARS_SUCCESS,
  payload: { cars, count }
})

export const setCarsCurrentPage = (currentPage: number): types.ISetCarsCurrentPage => ({
  type: types.SET_CARS_CURRENT_PAGE,
  payload: currentPage
})

export const editCarById = (accessToken: string, newCar: ICar)
  : types.IEditCarById => ({
  type: types.EDIT_CAR_BY_ID,
  payload: { accessToken, newCar }
})

export const editCarByIdSuccess = () => ({
  type: types.EDIT_CAR_BY_ID_SUCCESS
})

export const deleteCarById = (accessToken: string, carId: ICar['id'])
  : types.IDeleteCarById => ({
  type: types.DELETE_CAR_BY_ID,
  payload: { accessToken, carId }
})

export const deleteCarByIdSuccess = () => ({
  type: types.DELETE_CAR_BY_ID_SUCCESS
})
