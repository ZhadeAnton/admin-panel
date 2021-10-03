import axios from 'axios';

import { IAuthCredantionals } from '../interfaces/authInterfaces';

const url = process.env.REACT_APP_DEFAULT_URL
const base64 = process.env.REACT_APP_BASE64
const appId = process.env.REACT_APP_APPLICATION_ID

export const logIn = (credantionals: IAuthCredantionals) => {
  return axios({
    method: 'POST',
    url: `${url}api/auth/login`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json',
      'Authorization': `Basic ${base64}`
    },
    data: credantionals
  })
}

export const logOut = (accessToken: string) => {
  return axios({
    method: 'POST',
    url: `${url}api/auth/logout`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  })
}
