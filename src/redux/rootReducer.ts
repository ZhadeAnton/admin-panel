import { combineReducers } from 'redux'

import carSettingReducer from './carSetting/carSettingReducer'

const rootReducer = combineReducers({
  carSetting: carSettingReducer
})

export default rootReducer
