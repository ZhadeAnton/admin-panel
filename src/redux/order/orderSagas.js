import { takeLatest, call, put, all } from 'redux-saga/effects'

import * as actions from './orderActionCreators'
import * as types from './orderActionTypes'
import * as API from '../../API/orderAPI'

function* getOrders({ payload }) {
  try {
    const response = yield call(API.getOrders, {...payload})
    yield console.log(response)
    yield put(actions.getOrdersSuccess())
  } catch (error) {
    console.error(error)
  }
}

function* onGetOrders() {
  yield takeLatest(types.GET_ORDERS, getOrders)
}


export default function* orderSagas() {
  yield all([
    call(onGetOrders)
  ])
}
