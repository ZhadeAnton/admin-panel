import axios from 'axios';

import { INewCar } from '../interfaces/carInterfaces';

const url = process.env.REACT_APP_DEFAULT_URL
const base64 = process.env.REACT_APP_BASE64
const appId = process.env.REACT_APP_APPLICATION_ID

export const addNewCar = (newCar: INewCar) => {
  return axios({
    method: 'POST',
    url: `${url}api/db/car`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json',
      'Authorization': `Basic ${base64}`
    },
    data: newCar
  })
}
