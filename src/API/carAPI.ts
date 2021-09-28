import axios from 'axios';
import { IPostNewCar } from '../interfaces/carInterfaces';

const url = process.env.REACT_APP_DEFAULT_URL
const appId = process.env.REACT_APP_APPLICATION_ID

export const addNewCar = ({accessToken, newCar}: IPostNewCar) => {
  console.log(accessToken, newCar)
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
