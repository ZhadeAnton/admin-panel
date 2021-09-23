import { combineReducers } from 'redux'

import authReducer from './auth/authReducer'
import panelReducer from './panel/panelReducer'
import carSettingReducer from './carSetting/carSettingReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  panel: panelReducer,
  carSetting: carSettingReducer
})

export default rootReducer
