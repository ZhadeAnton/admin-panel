import { takeLatest, call, put, all } from 'redux-saga/effects'

import * as actions from './carsActionCreators'
import * as types from './carsActionTypes'
import * as API from '../../API/carAPI'

function* getCars({ payload }) {
  try {
    const response = yield call(API.getCarsByFilter, payload)
    yield put(actions.getCarsSuccess(response.data.data, response.data.count))
  } catch (error) {
    console.error(error)
  }
}

function* editCarById({ payload }) {
  const response = yield call(API.editCar, payload)
  yield console.log(response)
  try {
  } catch (error) {
    console.error(error)
  }
}

function* onGetCars() {
  yield takeLatest(types.GET_CARS, getCars)
}

function* onEditCarById() {
  yield takeLatest(types.EDIT_CAR_BY_ID, editCarById)
}

export default function* carsSagas() {
  yield all([
    call(onGetCars),
    call(onEditCarById)
  ])
}
