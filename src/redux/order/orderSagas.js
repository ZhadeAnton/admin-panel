import { takeLatest, call, put, all } from 'redux-saga/effects'

import { handleServerError } from '../panel/panelActionCreators'
import * as actions from './orderActionCreators'
import * as types from './orderActionTypes'
import * as API from '../../API/orderAPI'

function* getOrdersByFilter({ payload }) {
  try {
    const response = yield call(API.getOrdersByFilter, payload)
    yield put(actions.getOrdersByFiltersSuccess(response.data.data, response.data.count))
  } catch (error) {
    if (response.status >= 500) yield put(handleServerError())
    console.error(error)
  }
}

function* getOrderStatuses({ payload }) {
  try {
    const response = yield call(API.getOrderStatuses, payload)
    yield put(actions.getOrderStatusesSuccess(response.data.data))
  } catch (error) {
    if (response.status >= 500) yield put(handleServerError())
    console.error(error)
  }
}

function* setOrderStatusComplete({ payload }) {
  try {
    const response = yield call(API.setOrderStatusComplete, {...payload})
    yield put(actions.setOrderStatusCompleteSuccess(response.data.data))
  } catch (error) {
    if (response.status >= 500) yield put(handleServerError())
    yield put(actions.setOrderStatusCompleteFailure())
  }
}

function* setOrderStatusCancel({ payload }) {
  try {
    const response = yield call(API.setOrderStatusCancel, {...payload})
    yield put(actions.setOrderStatusCancelSuccess(response.data.data))
  } catch (error) {
    if (response.status >= 500) yield put(handleServerError())
    yield put(actions.setOrderStatusCancelFailure())
  }
}

function* onGetOrderStatuses() {
  yield takeLatest(types.GET_ORDER_STATUSES, getOrderStatuses)
}

function* onSetOrderStatusComplete() {
  yield takeLatest(types.SET_ORDER_STATUS_COMPLETE, setOrderStatusComplete)
}

function* onSetOrderStatusCancel() {
  yield takeLatest(types.SET_ORDER_STATUS_CANCEL, setOrderStatusCancel)
}

function* onGetOrdersByFilter() {
  yield takeLatest(types.GET_ORDERS_BY_FILTER, getOrdersByFilter)
}

export default function* orderSagas() {
  yield all([
    call(onGetOrderStatuses),
    call(onSetOrderStatusComplete),
    call(onSetOrderStatusCancel),
    call(onGetOrdersByFilter)
  ])
}
