import { ICarFromDB } from '../../interfaces/carInterfaces'

export const GET_CARS = 'GET_CARS'
export interface IGetCars {
  type: typeof GET_CARS
}

export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS'
export interface IGetCarsSuccess {
  type: typeof GET_CARS_SUCCESS,
  payload: Array<ICarFromDB>
}

export type ICarsTypes =
| IGetCars
| IGetCarsSuccess
