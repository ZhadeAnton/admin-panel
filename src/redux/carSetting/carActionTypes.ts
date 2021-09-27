import { ICarImage } from '../../interfaces/carInterfaces'
import { ICheckbox } from '../../interfaces/inputInterfaces'

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

export const CAR_SETTING_ADD_CHECKBOX = 'CAR_SETTING_ADD_CHECKBOX'
export interface ICarSettingAddCheckbox {
  type: typeof CAR_SETTING_ADD_CHECKBOX,
  payload: ICheckbox
}

export const CAR_SETTING_RESET = 'CAR_SETTING_RESET'
export interface ICarSettingReset {
  type: typeof CAR_SETTING_RESET
}

export type ICarSettingTypes =
| ICarSettingChange
| ICarSettingSetImage
| ICarSettingAddCheckbox
| ICarSettingReset
