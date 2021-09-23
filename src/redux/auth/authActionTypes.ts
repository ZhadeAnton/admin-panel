import { IAuthCredantionals } from '../../interfaces/authInterfaces';

export const LOG_IN = 'LOG_IN'
export interface ILogIn {
  type: typeof LOG_IN,
  payload: IAuthCredantionals
}

export type IAuthTypes =
| ILogIn
