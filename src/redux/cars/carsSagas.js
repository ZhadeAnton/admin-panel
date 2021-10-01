import { takeLatest, call, put, all } from 'redux-saga/effects'

import * as actions from './carsActionCreators'
import * as types from './carsActionTypes'
import * as API from '../../API/carAPI'

function* getCars() {
  try {
    const response = yield call(API.getCars)
    yield put(actions.getCarsSuccess(response.data.data))
  } catch (error) {
    if (response.status >= 500) yield put(handleServerError())
    console.error(error)
  }
}

function* onGetCars() {
  yield takeLatest(types.GET_CARS, getCars)
}

export default function* carsSagas() {
  yield all([
    call(onGetCars)
  ])
}
