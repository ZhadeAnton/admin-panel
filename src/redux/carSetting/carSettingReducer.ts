import { ICarImage } from '../../interfaces/carInterfaces'
import { ICheckbox } from '../../interfaces/inputInterfaces'
import * as types from './carActionTypes'

interface ICarSettingState {
  name: string,
  type: string,
  description: string,
  priceMin: string,
  priceMax: string,
  color: string,
  image: ICarImage | null,
  colorCheckboxes: Array<ICheckbox>
}

const INIT_STATE: ICarSettingState = {
  name: '',
  type: '',
  description: '',
  priceMin: '',
  priceMax: '',
  color: '',
  image: null,
  colorCheckboxes: [{checked: true, value: 'Любой'}]
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

    case types.CAR_SETTING_ADD_CHECKBOX:
      return {
        ...state,
        colorCheckboxes: [...state.colorCheckboxes, action.payload],
        color: ''
      }

    default:
      return state
  }
}

export default carSettingReducer
