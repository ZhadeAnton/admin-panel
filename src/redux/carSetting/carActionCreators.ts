import { ICheckbox } from './../../interfaces/inputInterfaces';
import * as types from './carActionTypes'
import { ICarImage } from './../../interfaces/carInterfaces';

export const carSettingChange = (type: string, value: string)
  : types.ICarSettingChange => ({
  type: types.CAR_SETTING_CHANGE,
  payload: { type, value }
})

export const setCarImage = (carImage: ICarImage): types.ICarSettingSetImage => ({
  type: types.CAR_SETTING_SET_IMAGE,
  payload: carImage
})

export const addCarColorCheckbox = (checkbox: ICheckbox)
  : types.ICarSettingAddCheckbox => ({
  type: types.CAR_SETTING_ADD_CHECKBOX,
  payload: checkbox
})

export const carSettingReset = (): types.ICarSettingReset => ({
  type: types.CAR_SETTING_RESET
})
