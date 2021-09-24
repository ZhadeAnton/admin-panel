import * as types from './authActionTypes'
import { IAuthSuccess } from '../../interfaces/authInterfaces'

interface IAuthState {
  authData: IAuthSuccess | null,
  isLoading: boolean,
  errorMessage: string
}

const INIT_STATE: IAuthState = {
  authData: null,
  isLoading: false,
  errorMessage: ''
}

const authReducer = (state = INIT_STATE, action: types.IAuthTypes): IAuthState => {
  switch (action.type) {
    case types.LOG_IN:
    case types.LOG_OUT:
      return {
        ...state,
        isLoading: true,
        errorMessage: ''
      }

    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        authData: action.payload,
        isLoading: false
      }

    case types.LOG_OUT_SUCCESS:
      return {
        ...state,
        authData: null,
        isLoading: false
      }

    case types.LOG_IN_FAILURE:
    case types.LOG_OUT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
      }

    default:
      return state
  }
}

export default authReducer
