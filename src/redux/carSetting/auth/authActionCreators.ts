import * as types from './authActionTypes'
import { IAuthCredantionals, IAuthSuccess } from '../../../interfaces/authInterfaces'

export const logIn = (credantionals: IAuthCredantionals): types.ILogIn => ({
  type: types.LOG_IN,
  payload: credantionals
})

export const logInSuccess = (authSuccess: IAuthSuccess): types.ILogInSuccess => ({
  type: types.LOG_IN_SUCCESS,
  payload: authSuccess
})

export const logOut = (acessToken: string): types.ILogOut => ({
  type: types.LOG_OUT,
  payload: acessToken
})

export const logOutSuccess = (): types.ILogOutSuccess => ({
  type: types.LOG_OUT_SUCCESS
})

export const logInFailure = (error: string): types.ILogInFailure => ({
  type: types.LOG_IN_FAILURE,
  payload: error
})

export const logOutFailure = (message: string): types.ILogOutFailure => ({
  type: types.LOG_OUT_FAILURE,
  payload: message
})
