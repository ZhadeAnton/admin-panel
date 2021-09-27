import { ICarImage } from '../../interfaces/carInterfaces'
import * as types from './carActionTypes'

interface ICarSettingState {
  name: string,
  type: string,
  description: string,
  priceMin: string,
  priceMax: string,
  image: ICarImage | null

}

const INIT_STATE: ICarSettingState = {
  name: '',
  type: '',
  description: '',
  priceMin: '',
  priceMax: '',
  image: null
}

const carSettingReducer = (
    state = INIT_STATE, action: types.ICarSettingTypes): ICarSettingState => {
  switch (action.type) {
    case types.CAR_SETTING_CHANGE:
      return {
        ...state,
        [action.payload.type]: action.payload.value
      }

    case types.CAR_SETTING_SET_IMAGE:
      return {
        ...state,
        image: action.payload
      }

    default:
      return state
  }
}

export default carSettingReducer
