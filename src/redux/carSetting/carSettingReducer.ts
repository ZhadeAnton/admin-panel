import {
  EDIT_CAR_BY_ID_SUCCESS,
  DELETE_CAR_BY_ID_SUCCESS,
  ICarsTypes } from '../cars/carsActionTypes'
import { ICar } from '../../interfaces/carInterfaces'
import { ICheckbox } from '../../interfaces/inputInterfaces'
import { getCarColorsCheckboxes } from '../../utils/carUtils'
import * as types from './carActionTypes'

interface ICarSettingState {
  name: string,
  type: string,
  description: string,
  priceMin: string,
  priceMax: string,
  color: string,
  categoryId: {
    name: string | undefined,
    id: string,
    description: string
  } | null,
  image: ICar['thumbnail'] | null,
  colorCheckboxes: Array<ICheckbox>,
  id: string | undefined,
  isNewCarSaved: boolean
}

const INIT_STATE: ICarSettingState = {
  name: '',
  type: '',
  description: '',
  priceMin: '',
  priceMax: '',
  color: '',
  categoryId: {
    name: 'Эконом+',
    description: 'Комфортные машины среднего класса',
    id: '61027a262aed9a0b9b8500c2'
  },
  image: null,
  colorCheckboxes: [],
  id: undefined,
  isNewCarSaved: false
}

type carTypes = ICarsTypes | types.ICarSettingTypes

const carSettingReducer = (
    state = INIT_STATE, action: carTypes): ICarSettingState => {
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

    case types.CAR_SETTING_ADD_NEW_CAR:
      return {
        ...state,
        isNewCarSaved: false
      }

    case types.CAR_SETTING_ADD_NEW_CAR_SUCCESS:
    case EDIT_CAR_BY_ID_SUCCESS:
    case DELETE_CAR_BY_ID_SUCCESS:
      return {
        ...state,
        ...INIT_STATE,
        isNewCarSaved: true
      }

    case types.CAR_SETTING_HIDE_NOTIFICATION:
      return {
        ...state,
        isNewCarSaved: false
      }

    case types.SET_EDITED_CAR_ITEM:
      return {
        ...state,
        name: action.payload.name,
        type: action.payload.categoryId?.name!,
        description: action.payload.description!,
        priceMin: action.payload.priceMin + '',
        priceMax: action.payload.priceMax + '',
        categoryId: action.payload.categoryId ?? null,
        image: action.payload.thumbnail,
        id: action.payload.id,
        colorCheckboxes: getCarColorsCheckboxes(action.payload.colors),
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
