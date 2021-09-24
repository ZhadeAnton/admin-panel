import { all, call } from 'redux-saga/effects'

import authSagas from './auth/authSagas'
import orderSagas from './order/orderSagas'

export default function* rootSaga() {
  yield all([
    call(authSagas),
    call(orderSagas)
  ])
}
