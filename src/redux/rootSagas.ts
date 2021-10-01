import { all, call } from 'redux-saga/effects'

import authSagas from './auth/authSagas'
import carsSagas from './cars/carsSagas'
import carSagas from './carSetting/carSettingSagas'
import orderSagas from './order/orderSagas'

export default function* rootSaga() {
  yield all([
    call(authSagas),
    call(orderSagas),
    call(carSagas),
    call(carsSagas)
  ])
}
