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
