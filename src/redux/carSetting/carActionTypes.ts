export const CAR_SETTING_CHANGE = 'CAR_SETTING_CHANGE'
export interface ICarSettingChange {
  type: typeof CAR_SETTING_CHANGE,
  payload: { type: string, value: string }
}

export type ICarSettingTypes =
| ICarSettingChange
