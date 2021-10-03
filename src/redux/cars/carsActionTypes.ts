import { ICar } from '../../interfaces/carInterfaces'

export const GET_CARS = 'GET_CARS'
export interface IGetCars {
  type: typeof GET_CARS,
  payload: { category: string | null, currentPage: number }
}

export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS'
export interface IGetCarsSuccess {
  type: typeof GET_CARS_SUCCESS,
  payload: { cars: Array<ICar>, count: number }
}

export const SET_CARS_CURRENT_PAGE = 'SET_CARS_CURRENT_PAGE'
export interface ISetCarsCurrentPage {
  type: typeof SET_CARS_CURRENT_PAGE,
  payload: number
}

export const EDIT_CAR_BY_ID = 'EDIT_CAR_BY_ID'
export interface IEditCarById {
  type: typeof EDIT_CAR_BY_ID,
  payload: { accessToken: string, newCar: ICar }
}

export type ICarsTypes =
| IGetCars
| IGetCarsSuccess
| ISetCarsCurrentPage
| IEditCarById
