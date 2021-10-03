import axios from './axiosConfig'
import { IAuthCredantionals } from '../interfaces/authInterfaces';

export const logIn = (credantionals: IAuthCredantionals) => {
  return axios.post('auth/login', credantionals, {
    headers: {
      'Authorization': `Basic ${process.env.REACT_APP_BASE64}`
    }
  })
}

export const logOut = (accessToken: string) => {
  return axios.post('auth/logout', accessToken, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
}
