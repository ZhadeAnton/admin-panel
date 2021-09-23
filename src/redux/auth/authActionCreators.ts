import * as types from './authActionTypes'
import { IAuthCredantionals } from '../../interfaces/authInterfaces'

export const logIn = (credantionals: IAuthCredantionals): types.ILogIn => ({
  type: types.LOG_IN,
  payload: credantionals
})
