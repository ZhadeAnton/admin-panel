import axios from 'axios';
import { IPostNewCar } from '../interfaces/carInterfaces';
import { getCarTableFilter } from '../utils/carUtils';

const url = process.env.REACT_APP_DEFAULT_URL
const appId = process.env.REACT_APP_APPLICATION_ID
const carsLimit = 7

interface IGetCarsByFilter {
  category: string,
  currentPage: number
}

export const addNewCar = ({accessToken, newCar}: IPostNewCar) => {
  return axios({
    method: 'POST',
    url: `${url}api/db/car/`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    data: newCar
  })
}

export const getCarsByFilter = ({category, currentPage}: IGetCarsByFilter) => {
  const categoryId = getCarTableFilter(category)

  return axios({
    method: 'GET',
    url: `${url}api/db/car?${categoryId}limit=${carsLimit}&page=${currentPage}`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json'
    }
  })
}
