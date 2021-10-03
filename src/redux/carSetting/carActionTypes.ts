import { ICarImage, INewCar } from '../../interfaces/carInterfaces'
import { ICheckbox, IRadioButton } from '../../interfaces/inputInterfaces'

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

export const CAR_SETTING_ADD_NEW_CAR = 'CAR_SETTING_ADD_NEW_CAR'
export interface ICarSettingAddNewCar {
  type: typeof CAR_SETTING_ADD_NEW_CAR,
  payload: { accessToken: string, newCar: INewCar }
}

export const CAR_SETTING_ADD_NEW_CAR_SUCCESS = 'CAR_SETTING_ADD_NEW_CAR_SUCCESS'
export interface ICarSettingAddNewCarSuccess {
  type: typeof CAR_SETTING_ADD_NEW_CAR_SUCCESS
}

export const CAR_SETTING_HIDE_NOTIFICATION = 'CAR_SETTING_HIDE_NOTIFICATION'
export interface ICarSettingHideNotification {
  type: typeof CAR_SETTING_HIDE_NOTIFICATION
}

export const CAR_SETTING_CATEGORY_CHANGE = 'CAR_SETTING_CATEGORY_CHANGE'
export interface ICarSettingCategoryChange {
  type: typeof CAR_SETTING_CATEGORY_CHANGE,
  payload: IRadioButton
}

export const CAR_SETTING_RESET = 'CAR_SETTING_RESET'
export interface ICarSettingReset {
  type: typeof CAR_SETTING_RESET
}

export type ICarSettingTypes =
| ICarSettingChange
| ICarSettingSetImage
| ICarSettingAddCheckbox
| ICarSettingAddNewCar
| ICarSettingAddNewCarSuccess
| ICarSettingCategoryChange
| ICarSettingHideNotification
| ICarSettingReset
