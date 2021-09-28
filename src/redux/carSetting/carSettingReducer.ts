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
  categoryId: {
    value: string,
    id: string,
    description: string
  },
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
  categoryId: {
    value: 'Эконом+',
    description: 'Комфортные машины среднего класса',
    id: '61027a262aed9a0b9b8500c2'
  },
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

    case types.CAR_SETTING_CATEGORY_CHANGE:
      return {
        ...state,
        categoryId: action.payload
      }

    case types.CAR_SETTING_RESET:
      return {
        ...INIT_STATE
      }

    default:
      return state
  }
}

export default carSettingReducer
