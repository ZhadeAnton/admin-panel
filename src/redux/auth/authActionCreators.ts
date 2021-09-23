import * as types from './authActionTypes'
import { IAuthCredantionals, IAuthSuccess } from '../../interfaces/authInterfaces'

export const logIn = (credantionals: IAuthCredantionals): types.ILogIn => ({
  type: types.LOG_IN,
  payload: credantionals
})

export const logInSuccess = (authSuccess: IAuthSuccess): types.ILogInSuccess => ({
  type: types.LOG_IN_SUCCESS,
  payload: authSuccess
})

export const logInFailure = (error: string): types.ILogInFailure => ({
  type: types.LOG_IN_FAILURE,
  payload: error
})
