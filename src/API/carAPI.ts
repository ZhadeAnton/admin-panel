import axios from 'axios';
import { IPostNewCar } from '../interfaces/carInterfaces';

const url = process.env.REACT_APP_DEFAULT_URL
const appId = process.env.REACT_APP_APPLICATION_ID
const carsLimit = 7

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

export const getCars = () => {
  return axios({
    method: 'GET',
    url: `${url}api/db/car?limit=${carsLimit}page=0`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json'
    }
  })
}
