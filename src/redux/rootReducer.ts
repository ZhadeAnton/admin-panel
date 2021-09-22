import { combineReducers } from 'redux'

import panelReducer from './panel/panelReducer'
import carSettingReducer from './carSetting/carSettingReducer'

const rootReducer = combineReducers({
  panel: panelReducer,
  carSetting: carSettingReducer
})

export default rootReducer
