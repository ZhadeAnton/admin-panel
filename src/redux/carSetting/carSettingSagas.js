import { takeLatest, call, put, all } from 'redux-saga/effects'

import * as actions from './carActionCreators'
import * as types from './carActionTypes'
import * as API from '../../API/carAPI.ts'

function* addNewCar({ payload }) {
  try {
    const response = yield call(API.addNewCar, payload)
    if (response.status === 200) {
      yield put(actions.addNewCarSuccess())
    }
  } catch (error) {
    console.error(error)
  }
}

function* onAddNewCar() {
  yield takeLatest(types.CAR_SETTING_ADD_NEW_CAR, addNewCar)
}

export default function* carSagas() {
  yield all([
    call(onAddNewCar)
  ])
}
