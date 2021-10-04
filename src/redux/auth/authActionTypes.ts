import { IAuthCredantionals, IAuthSuccess } from '../../interfaces/authInterfaces';

export const LOG_IN = 'LOG_IN'
export interface ILogIn {
  type: typeof LOG_IN,
  payload: IAuthCredantionals
}

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export interface ILogInSuccess {
  type: typeof LOG_IN_SUCCESS,
  payload: IAuthSuccess
}

export const LOG_OUT = 'LOG_OUT'
export interface ILogOut {
  type: typeof LOG_OUT,
  payload: string
}

export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export interface ILogOutSuccess {
  type: typeof LOG_OUT_SUCCESS
}

export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'
export interface ILogInFailure {
  type: typeof LOG_IN_FAILURE,
  payload: string
}

export const LOG_OUT_FAILURE = 'LOG_IN_FAILURE'
export interface ILogOutFailure {
  type: typeof LOG_OUT_FAILURE,
  payload: string
}

export type IAuthTypes =
| ILogIn
| ILogInSuccess
| ILogInFailure
| ILogOut
| ILogOutSuccess
| ILogOutFailure
