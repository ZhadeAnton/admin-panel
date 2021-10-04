import { combineReducers } from 'redux'

import authReducer from './auth/authReducer'
import panelReducer from './panel/panelReducer'
import carSettingReducer from './carSetting/carSettingReducer'
import orderReducer from './order/orderReducer'
import carsReducer from './cars/carsReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  panel: panelReducer,
  cars: carsReducer,
  carSetting: carSettingReducer,
  order: orderReducer
})

export default rootReducer
