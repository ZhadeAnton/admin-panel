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
  yield call(API.editCar, payload)
  yield put(actions.editCarByIdSuccess())
  try {
  } catch (error) {
    console.error(error)
  }
}

function* deleteCarById({ payload }) {
  yield call(API.deleteCar, payload)
  yield put(actions.editCarByIdSuccess())
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

function* onDeleteCarById() {
  yield takeLatest(types.DELETE_CAR_BY_ID, deleteCarById)
}

export default function* carsSagas() {
  yield all([
    call(onGetCars),
    call(onEditCarById),
    call(onDeleteCarById)
  ])
}
