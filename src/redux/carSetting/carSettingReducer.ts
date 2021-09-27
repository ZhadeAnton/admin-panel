import * as types from './carActionTypes'

interface ICarSettingState {
  name: string,
  type: string,
  description: string,
  priceMin: string,
  priceMax: string
}

const INIT_STATE: ICarSettingState = {
  name: '',
  type: '',
  description: '',
  priceMin: '',
  priceMax: ''
}

const carSettingReducer = (
    state = INIT_STATE, action: types.ICarSettingChange): ICarSettingState => {
  switch (action.type) {
    case types.CAR_SETTING_CHANGE:
      return {
        ...state,
        [action.payload.type]: action.payload.value
      }

    default:
      return state
  }
}

export default carSettingReducer
