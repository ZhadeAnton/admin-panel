import * as types from './carActionTypes'
import { ICheckbox, IRadioButton } from './../../interfaces/inputInterfaces';
import { ICar, IPostNewCar } from './../../interfaces/carInterfaces';

export const carSettingChange = (type: string, value: string)
  : types.ICarSettingChange => ({
  type: types.CAR_SETTING_CHANGE,
  payload: { type, value }
})

export const setCarImage = (carImage: ICar['thumbnail']): types.ICarSettingSetImage => ({
  type: types.CAR_SETTING_SET_IMAGE,
  payload: carImage
})

export const addCarColorCheckbox = (checkbox: ICheckbox)
  : types.ICarSettingAddCheckbox => ({
  type: types.CAR_SETTING_ADD_CHECKBOX,
  payload: checkbox
})

export const removeCarColorCheckbox = (checkbox: ICheckbox)
  :types.ICarSettingRemoveCheckbox => ({
  type: types.CAR_SETTING_REMOVE_CHECKBOX,
  payload: checkbox
})

export const carCategoryChange = (category: IRadioButton)
  : types.ICarSettingCategoryChange => ({
  type: types.CAR_SETTING_CATEGORY_CHANGE,
  payload: category
})

export const addNewCar = ({accessToken, newCar}: IPostNewCar)
  : types.ICarSettingAddNewCar => ({
  type: types.CAR_SETTING_ADD_NEW_CAR,
  payload: {accessToken, newCar}
})

export const addNewCarSuccess = (): types.ICarSettingAddNewCarSuccess => ({
  type: types.CAR_SETTING_ADD_NEW_CAR_SUCCESS
})

export const hideCarNotification = (): types.ICarSettingHideNotification => ({
  type: types.CAR_SETTING_HIDE_NOTIFICATION
})

export const setEditableCarItem = (carItem: ICar): types.ISetEditedCarItem => ({
  type: types.SET_EDITED_CAR_ITEM,
  payload: carItem
})

export const carSettingReset = (): types.ICarSettingReset => ({
  type: types.CAR_SETTING_RESET
})
