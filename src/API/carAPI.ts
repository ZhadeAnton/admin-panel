import axios from './axiosConfig'
import { IDeleteCar, IGetCarsByFilter, IPostNewCar } from '../interfaces/carInterfaces';
import { getCarTableFilter } from '../utils/carUtils';

export const addNewCar = ({accessToken, newCar}: IPostNewCar) => {
  return axios.post('db/car', newCar, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
}

export const editCar = ({accessToken, newCar}: IPostNewCar) => {
  return axios.put(`db/car/${newCar.id}`, newCar, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
}

export const deleteCar = ({accessToken, carId}: IDeleteCar) => {
  return axios.delete(`db/car/${carId}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
}

export const getCarsByFilter = ({category, currentPage}: IGetCarsByFilter) => {
  return axios.get(`db/car?${getCarTableFilter(category)}limit=${7}&page=${currentPage}`)
}
