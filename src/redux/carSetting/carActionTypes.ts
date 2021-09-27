import { ICarImage } from '../../interfaces/carInterfaces'

export const CAR_SETTING_CHANGE = 'CAR_SETTING_CHANGE'
export interface ICarSettingChange {
  type: typeof CAR_SETTING_CHANGE,
  payload: { type: string, value: string }
}

export const CAR_SETTING_SET_IMAGE = 'CAR_SETTING_SET_IMAGE'
export interface ICarSettingSetImage {
  type: typeof CAR_SETTING_SET_IMAGE,
  payload: ICarImage
}

export type ICarSettingTypes =
| ICarSettingChange
| ICarSettingSetImage
