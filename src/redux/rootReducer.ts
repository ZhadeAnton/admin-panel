import { combineReducers } from 'redux'

import authReducer from './auth/authReducer'
import panelReducer from './panel/panelReducer'
import carSettingReducer from './carSetting/carSettingReducer'
import orderReducer from './order/orderReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  panel: panelReducer,
  carSetting: carSettingReducer,
  order: orderReducer
})

export default rootReducer
